import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
@ViewChildren('inp') inputs!:QueryList<ElementRef>
label!:string
showLabel(event:Event,label:string):void{

  this.inputs.forEach((element)=>{
    if (event.target==element.nativeElement) {
      if (element.nativeElement.value=='') {
        element.nativeElement.previousElementSibling.classList.remove('animate-label-top')
        element.nativeElement.previousElementSibling.classList.add('animate-label-bottom')
        // element.nativeElement.previousElementSibling.innerText=''
        
      } else {
        element.nativeElement.previousElementSibling.classList.remove('animate-label-bottom')
        element.nativeElement.previousElementSibling.classList.add('animate-label-top')
        element.nativeElement.previousElementSibling.innerText=label

      }
      console.log(event.target);
      console.log(element.nativeElement.previousElementSibling);
     
      
    }
    
  })
  
}


}
