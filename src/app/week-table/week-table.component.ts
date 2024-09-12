import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-table',
  standalone: true,
  imports: [TableModule,CardModule,CommonModule],
  templateUrl: './week-table.component.html',
  styleUrl: './week-table.component.css'
})
export class WeekTableComponent implements OnInit {
  daysOfWeek: any[] = [];
  currentDate: Date = new Date();

  ngOnInit(): void {
    this.generateLastWeekDates();
  }

  generateLastWeekDates(): void {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek - 7); 
  
    this.daysOfWeek = []; 

    for (let i = 1; i <= 5; i++) { 
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  
      this.daysOfWeek.push({
        name: dayName,
        date: formattedDate,
        content: `Content for ${dayName}, ${formattedDate}`
      });
    }
  }
  
  
}
