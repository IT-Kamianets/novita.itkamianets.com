import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class ContactsComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.contactData);
    this.submitted = true;
    // Reset form after some time
    setTimeout(() => {
      this.submitted = false;
      this.contactData = { name: '', email: '', message: '' };
    }, 5000);
  }
}
