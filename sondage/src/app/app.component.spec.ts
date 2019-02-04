import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sondage'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sondage');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to sondage!');
  });
});


@Component({
  selector: 'my-app',
  template: `
    <kendo-chart style="height: 450px;">
      <ng-template kendoChartDonutCenterTemplate>
        <h3>22.5%</h3>
        of which renewables
      </ng-template>
      <kendo-chart-series>
        <kendo-chart-series-item
            type="donut" [data]="data"
            categoryField="kind" field="share">
          <kendo-chart-series-item-labels
            [content]="labelContent"
            color="#fff" background="none">
          </kendo-chart-series-item-labels>
        </kendo-chart-series-item>
      </kendo-chart-series>
      <kendo-chart-legend [visible]="false"></kendo-chart-legend>
    </kendo-chart>
  `
})
export class AppComponent {
  public data: any[] = [{
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];

  public labelContent(e: any): string {
    return e.category;
  }
}
