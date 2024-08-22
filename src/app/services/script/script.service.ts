import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor(
    public route: Router,
    public zone: NgZone,
    @Inject(DOCUMENT) private document: Document
  ) { }


  init(type: string = ""): void {
    let scriptUrls: string[];

    if(type === "admin"){
      scriptUrls = [
        "/web/assets/js/vendor/jquery-3.4.1.min.js",
        "/web/assets/js/bootstrap.min.js",
      ];
    }else{
      scriptUrls = [
        "/web/assets/js/vendor/jquery-3.4.1.min.js",
        "/web/assets/js/popper.js",
        "/web/assets/js/bootstrap.min.js",
        "/web/assets/js/plugins.js",
        "/web/assets/js/owl.carousel.main.js",
        "/web/assets/js/jquery.nice.select.js",
        "/web/assets/js/scrollup.js",
        "/web/assets/js/ajax.chimp.js",
        "/web/assets/js/jquery.ui.js",
        "/web/assets/js/jquery.elevatezoom.js",
        "/web/assets/js/imagesloaded.js",
        "/web/assets/js/isotope.main.js",
        "/web/assets/js/jqquery.ripples.js",
        "/web/assets/js/jquery.cookie.js",
        "/web/assets/js/bpopup.js",
        "/web/assets/js/main.js"
      ];
    }


    this.loadScripts(scriptUrls).then(() => {
      console.log('Scripts loaded successfully');
    }).catch(error => {
      console.error('Error loading scripts:', error);
    });
  }


  loadScripts(scriptUrls: string[]): Promise<void[]> {
    const loadPromises: Promise<void>[] = [];
    scriptUrls.forEach(url => {
      const script = this.document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.async = true;
      script.defer = true;

      const promise = new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = (error) => reject(error);
      });

      this.document.body.appendChild(script);
      loadPromises.push(promise);

    });

    return Promise.all(loadPromises);
  }

}
