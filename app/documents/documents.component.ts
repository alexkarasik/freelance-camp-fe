import { Component} from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "my First Doc",
      description: 'qefwevwvv vqerbqerb',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://www.spiderg.com/wp-content/uploads/2016/11/1-11.jpg',
    },
    {
      title: "my Second Doc",
      description: 'qefwevwvv vqerbqerb',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://www.mawista.com/blog/wp-content/uploads/2015/12/working-freelancer-germany.jpeg',
    },
    {
      title: "my Last Doc",
      description: 'qefwevwvv vqerbqerb',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2016/04/02/Photos/Computerpic-kXYB--621x414@LiveMint.jpg',
    }
  ]
}
