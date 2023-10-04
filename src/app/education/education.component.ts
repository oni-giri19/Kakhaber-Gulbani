import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  openCertificate() {
    const netlifyUrl =
      'https://vocal-lokum-036937.netlify.app/images/Artboard%201%20copy%202.png';
    window.open(netlifyUrl, '_blank');
  }
  openDegree() {
    const netlifyUrl = `https://vocal-lokum-036937.netlify.app/images/Bachelor's%20Degree.jpg`;
    window.open(netlifyUrl, '_blank');
  }
  openDiploma() {
    const netlifyUrl = `https://vocal-lokum-036937.netlify.app/images/School%20Diploma.jpg`;
    window.open(netlifyUrl, '_blank');
  }
}
