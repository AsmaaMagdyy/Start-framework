import { Component, ElementRef, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { StarComponent } from "../star/star.component";


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  smallImgSrc!: String;

  @ViewChild('mysection') lightBox!: ElementRef
  @ViewChild('lightBoxImg') lightBoxImg!: ElementRef
  @ViewChildren('parentDiv') AllparentDiv!: QueryList<ElementRef>

  show(event: Event): void {
    // console.log(event.currentTarget);

    this.AllparentDiv.forEach((element) => {
      // console.log(element.nativeElement);

      if (event.currentTarget == element.nativeElement) {

        console.log(element.nativeElement);

        element.nativeElement.children[0].getAttribute('src')
        this.smallImgSrc = element.nativeElement.children[0].getAttribute('src')
        console.log(this.smallImgSrc);
        this.lightBox.nativeElement.classList.remove('d-none')
        this.lightBoxImg.nativeElement.setAttribute('src', this.smallImgSrc)

      }

    })



  }
  hideLightBox(event: MouseEvent): void {
    let target = event.target
    console.log(target);


    this.lightBox.nativeElement.classList.add('d-none')

  }
  OnClick(event: Event): void {
    event.stopPropagation();
  }


}
