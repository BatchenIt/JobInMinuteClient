import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, FormsModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  dummyObj: number[] = [];
  longText = `קופאים/ות למשרה מאתגרת באווירת חו"ל
  התפקיד כולל -
  - מתן שירות ללקוחות
  - מכירת מוצרי קופה ייחודיים
  - תפעול קופה בשילוב מטבע זר
  הסעות הלוך ושוב בכל שעות היממה. תנאים מצוינים למתאימים/ות, אופציה לעתודה ניהולית.
  שכר אטרקטיבי במיוחד , בונוס התמדה, סל רווחה נרחב, מתנות בחגים ועוד...
  המשרה מתאימה גם לחיילים משוחררים וסטודנטים .`;

  constructor() {
    for (let index = 0; index < 32; index++) {
      this.dummyObj.push(index);
    }
  }
}
