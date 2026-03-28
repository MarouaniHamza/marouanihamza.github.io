import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "../app.component";
import { routes } from "./app-routing.module";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { DemosRoutingModule } from "../demos/modules/demos-routing.module";
import { MyPortfolioComponent } from "../my-portfolio/my-portfolio.component";
import { By } from "@angular/platform-browser";
import { DemoDetailsComponent } from "../demos/demo-details/demo-details.component";
import { DemosComponent } from "../demos/demos.component";

describe('AppRoutingModule', async() => {
    let appComponent: AppComponent;
    let myPortfolioComponent: MyPortfolioComponent;
    let demosComponent: DemosComponent;
    let appFixture: ComponentFixture<AppComponent>;
    let myPortfolioFixture: ComponentFixture<MyPortfolioComponent>;
    let demosFixture: ComponentFixture<DemosComponent>;
    let location: Location;
    let router: Router;

    beforeEach(async()=>{
        await TestBed.configureTestingModule(
            {
                declarations:[AppComponent,MyPortfolioComponent, DemosComponent, DemoDetailsComponent],
                imports: [
                    DemosRoutingModule, RouterTestingModule.withRoutes(routes)
                ]
            }
        ).compileComponents();
        appFixture = TestBed.createComponent(AppComponent);
        appComponent = appFixture.componentInstance;
        myPortfolioFixture = TestBed.createComponent(MyPortfolioComponent);
        myPortfolioComponent = myPortfolioFixture.componentInstance;
        demosFixture = TestBed.createComponent(DemosComponent);
        demosComponent = demosFixture.componentInstance;
        location = TestBed.inject(Location);
        router = TestBed.inject(Router);
        router.initialNavigation();
        appFixture.detectChanges();
        myPortfolioFixture.detectChanges();
        demosFixture.detectChanges();
    });

    it('Must go to / for inital navigation', waitForAsync(() => {
        appFixture.whenStable().then(
            () => expect(location.path()).toBe('/demos')
        );
    }));

    it('Must go to /demos when demos link is clicked', waitForAsync(() => {
        const demosLink = myPortfolioFixture.debugElement.queryAll(By.css('a'))[0];
        demosLink.nativeElement.click();
        myPortfolioFixture.whenStable().then(
            () => expect(location.path()).toBe('/demos')
        );
    }));

    it('Must go to /works when works link is clicked', waitForAsync(() => {
        const demosLink = myPortfolioFixture.debugElement.queryAll(By.css('a'))[1];
        demosLink.nativeElement.click();
        myPortfolioFixture.whenStable().then(
            () => expect(location.path()).toBe('/works')
        );
    }));

    it('Must go to /favorite when favorite link is clicked', waitForAsync(() => {
        const demosLink = myPortfolioFixture.debugElement.queryAll(By.css('a'))[2];
        demosLink.nativeElement.click();
        myPortfolioFixture.whenStable().then(
            () => expect(location.path()).toBe('/favorite')
        );
    }));

    it('Must go to the demos/random-quotes when first button cliked', waitForAsync(() => {
        const randomQuoteButton = demosFixture.debugElement.queryAll(By.css('button'))[0];
        randomQuoteButton.nativeElement.click();
        demosFixture.whenStable().then(
            () => {
                expect(location.path()).toBe('/demos/random-quotes');
            }
        );
    }));

    it('Must go to the demos/markdown-previewer when second button cliked', waitForAsync(() => {
        const randomQuoteButton = demosFixture.debugElement.queryAll(By.css('button'))[1];
        randomQuoteButton.nativeElement.click();
        demosFixture.whenStable().then(
            () => {
                expect(location.path()).toBe('/demos/markdown-previewer');
            }
        );
    }));

    it('Must go to the demos/drum-machine when third button cliked', waitForAsync(() => {
        const randomQuoteButton = demosFixture.debugElement.queryAll(By.css('button'))[2];
        randomQuoteButton.nativeElement.click();
        demosFixture.whenStable().then(
            () => {
                expect(location.path()).toBe('/demos/drum-machine');
            }
        );
    }));

    it('Must go to the demos/calculator when fourth button cliked', waitForAsync(() => {
        const randomQuoteButton = demosFixture.debugElement.queryAll(By.css('button'))[3];
        randomQuoteButton.nativeElement.click();
        demosFixture.whenStable().then(
            () => {
                expect(location.path()).toBe('/demos/calculator');
            }
        );
    }));

    it('Must go to the demos/clock-25-5 when fifth button cliked', waitForAsync(() => {
        const randomQuoteButton = demosFixture.debugElement.queryAll(By.css('button'))[4];
        randomQuoteButton.nativeElement.click();
        demosFixture.whenStable().then(
            () => {
                expect(location.path()).toBe('/demos/clock-25-5');
            }
        );
    }));
});