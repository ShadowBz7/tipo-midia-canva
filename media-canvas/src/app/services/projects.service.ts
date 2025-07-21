// src/app/services/projects.service.ts
import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';

export interface Project {
  id?: number;
  name: string;
  type: string;
  extension: string;
  author: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private api = 'http://localhost:3306/api/projects';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.api);
  }

  get(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.api}/${id}`);
  }

  create(proj: Project): Observable<Project> {
    return this.http.post<Project>(this.api, proj);
  }

  update(proj: Project): Observable<Project> {
    return this.http.put<Project>(`${this.api}/${proj.id}`, proj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}