import { Component, ElementRef, HostListener, Injector, afterNextRender, inject, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cv-qr-widget',
  imports: [],
  templateUrl: './cv-qr-widget.html',
  styleUrl: './cv-qr-widget.scss',
})
export class CvQrWidget {
  @ViewChild('trigger') private trigger?: ElementRef<HTMLButtonElement>;
  @ViewChild('closeButton') private closeButton?: ElementRef<HTMLButtonElement>;
  private readonly injector = inject(Injector);
  protected readonly isOpen = signal(false);
  protected readonly shareStatus = signal('');
  protected readonly cvUrl = 'https://lokeshwarivadlamudi-ui.github.io/lokeshwari-portfolio/Lokeshwari-Vadlamudi-CV.pdf';

  protected togglePanel(): void {
    this.isOpen.update((open) => !open);
    this.shareStatus.set('');
  }

  protected closePanel(): void {
    this.isOpen.set(false);
    this.trigger?.nativeElement.focus();
  }

  @HostListener('document:keydown.escape')
  protected closeOnEscape(): void {
    if (this.isOpen()) this.closePanel();
  }

  protected async shareCv(): Promise<void> {
    const shareNavigator = typeof navigator === 'undefined'
      ? undefined
      : navigator as Navigator & { share?: (data: ShareData) => Promise<void> };
    if (shareNavigator?.share) {
      try {
        await shareNavigator.share({ title: 'Lokeshwari Vadlamudi - CV', text: 'View my frontend developer CV.', url: this.cvUrl });
        this.shareStatus.set('The CV link is ready to share.');
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        this.shareStatus.set('Sharing is unavailable right now. Copy the link instead.');
      }
      return;
    }
    await this.copyCvLink();
  }

  protected async copyCvLink(): Promise<void> {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard is unavailable');
      await navigator.clipboard.writeText(this.cvUrl);
      this.shareStatus.set('CV link copied.');
    } catch {
      this.shareStatus.set(`Copy is unavailable. Use this link: ${this.cvUrl}`);
    }
  }
}
