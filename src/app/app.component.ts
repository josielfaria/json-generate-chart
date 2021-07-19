import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faGithub, faGitlab, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faClone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  name = 'Josiel Faria';
  designation = 'Software Engineer';
  socialMedias = [
    { name: 'Portfolio', link: 'https://josielfaria.com/', icon: faClone },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/josiel-silva-07b416b7/', icon: faLinkedin },
    { name: 'Instagram', link: 'https://www.instagram.com/ujosiel/', icon: faInstagram },
    { name: 'Github', link: 'https://github.com/josielfaria', icon: faGithub },
    { name: 'Gitlab', link: 'https://gitlab.com/josielsifa', icon: faGitlab },
  ];

  constructor(private observer: BreakpointObserver) { }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
