import { Component, OnInit } from '@angular/core';
import { CategoriesServiceService, Category } from '../services/categories-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categoriesData: Category[] = [];

  constructor(private categoryService: CategoriesServiceService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe( data => { 
      console.log("Categories data ");
      data.forEach((val, index, valarr) => {
        console.log(JSON.stringify(val));
      })
      this.categoriesData = data;
    });
  }

}
