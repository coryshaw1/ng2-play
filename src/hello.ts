import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {DATE_PICKER_PROVIDERS, DateRange, Collapse} from 'fuel-ui/fuel-ui';

@Component({
    selector: 'hello-app',
    template: `
        <h1>Hello, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
        <div class="row">
            <div class="col-md-6">
                <form class="form-inline">
                    <date-range-picker
                        minDate="11/1/2015"
                        maxDate="11/12/2016" 
                        [dateFilter]="dateFilter"
                        (valueChange)="datePickerValueChange($event)">
                        <div class="form-group">
                            <label for="arrival">Arrival Date</label>
                            <div class="date-picker-input-group">
                                <input name="arrival" startDateField class="form-control" value="5/5/2016" placeholder="Arrival" />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="departure">Departure Date</label>
                            <div class="date-picker-input-group">
                                <input name="departure" endDateField class="form-control" value="5/10/2016" placeholder="Departure" />
                            </div>
                        </div>
                    </date-range-picker>
                </form>
            </div>
        </div>

        <button class="btn btn-primary" (click)="collapsed = !collapsed">Toggle Collapse</button>
        <style>
            #collapse-demo-box {
                border: 1px solid black; 
                padding: 0 25px;
            }
        </style>
        <div id="collapse-demo-box" @collapse="collapsed ? 'true' : 'false'">
            <h2>All of your content</h2>
            <ul>
                <li>That you wish</li>
                <li>to be able</li>
                <li>to collapse</li>
            </ul>
            <p>At any time!</p>
        </div>
    `,
    directives: [DATE_PICKER_PROVIDERS],
    animations: [Collapse(300)]
})
export class HelloApp {
    name: string = 'World';
    collapsed: boolean = false;
    
    dateRangePickerValue: DateRange;
    
    datePickerValueChange(eventValue: any){
        this.dateRangePickerValue = eventValue;
    }
}

bootstrap(HelloApp);