import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  ageCalculatorSource() {
    // Define the GitHub URL you want to open
    const githubUrl = 'https://github.com/oni-giri19/Simple-Age-Calculator';

    // Open the GitHub URL in a new tab or window
    window.open(githubUrl, '_blank');
  }
  ageCalculatorLive() {
    const netlifyUrl = 'https://adorable-rolypoly-a3079d.netlify.app/';
    window.open(netlifyUrl, '_blank');
  }
  htmlCssProjectSource() {
    const githubUrl = 'https://github.com/oni-giri19/Html-Css-Final-Project';
    window.open(githubUrl, '_blank');
  }

  htmlCssProjectLive() {
    const netlifyUrl = 'https://sparkling-klepon-4472cc.netlify.app/';
    window.open(netlifyUrl, '_blank');
  }

  weatherAppSource() {
    const githubUrl = 'https://github.com/oni-giri19/Final-Project-JS';
    window.open(githubUrl, '_blank');
  }

  weatherAppLive() {
    const netlifyUrl = 'https://dazzling-cannoli-bc816d.netlify.app/';
    window.open(netlifyUrl, '_blank');
  }

  employeeAdderAppSource() {
    const githubUrl =
      'https://github.com/oni-giri19/ng-final-project-Employee-Form-';
    window.open(githubUrl, '_blank');
  }
  tbcxusaidLive() {
    const netlifyUrl = 'https://tbc-x-usaid-page.netlify.app/';
    window.open(netlifyUrl, '_blank');
  }

  tbcxusaidSource() {
    const githubUrl = 'https://github.com/oni-giri19/TBC-x-USAID';
    window.open(githubUrl, '_blank');
  }
}
