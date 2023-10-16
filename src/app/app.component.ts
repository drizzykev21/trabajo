import { Component } from '@angular/core';
<<<<<<< HEAD

=======
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
>>>>>>> fa16ae5 (segundo)
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
<<<<<<< HEAD
  constructor() {}
=======
  constructor(private storage: Storage, private platform: Platform) {
    this.iniciarStorage();

  }

  iniciarStorage() {
    this.platform.ready().then(async () => {
      await this.storage.create();
    })
  }
>>>>>>> fa16ae5 (segundo)
}
