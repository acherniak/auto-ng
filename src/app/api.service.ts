import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	data: any = {};
	constructor(private http: HttpClient) { }
	init = () => { 
		['posts','comments'].forEach((obj:string) => 
			this.http.get('https://jsonplaceholder.typicode.com/'+obj).subscribe((res:any) => 
				this.data[obj]=res)
			) 
	}
}
