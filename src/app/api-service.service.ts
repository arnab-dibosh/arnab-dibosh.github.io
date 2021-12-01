import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Hero } from './hero';
import { Project } from './project';
import { Intern_Project} from './intern_project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService 
{

  constructor(private http : HttpClient) { }
  
  internUrl = "https://localhost:44346/api/Interns";
  projectUrl = "https://localhost:44346/api/Projects";
  internProjectUrl = "https://localhost:44346/api/intern_project";

  getInterns()
  {
    let url = this.internUrl;
    let data = this.http.get(url);
    return data;
  }
  getProjects()
  {
    let url = this.projectUrl;
    let data = this.http.get(url);
    return data;
  }


  getIntern(id: number): Observable<Hero>{
    const url = `${this.internUrl}/${id}`;
    return this.http.get<Hero>(url);
  }
  getProject(id: number): Observable<Project>{
    const url = `${this.projectUrl}/${id}`;
    return this.http.get<Project>(url);
  }

  assignProject(i_id: number, p_id: number) : Observable<Intern_Project>
  {
    const url = `${this.internProjectUrl}`;

    console.log(url);
    let httpOptions = 
    {
      headers : new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Intern_Project>(url, { intern_id : i_id, project_id: p_id } as Intern_Project , httpOptions);
  }

}


