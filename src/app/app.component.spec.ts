// Testing Pattern: Arrange Act Assert (AAA) // Given 
// Configures and initializes environment for unit testing and 
// provides methods for creating components and services in unit tests.

// Arrange: Let's arrange the needed tools and component
import { TestBed } from '@angular/core/testing';
// Sets up the router to be used for testing.
import { RouterTestingModule } from '@angular/router/testing';
// Taking up the component for Testing 
import { AppComponent } from './app.component';

// Group of related test spec -- a.k.a Test Suite
xdescribe('AppComponent Class', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          AppComponent
        ],
      }).compileComponents();
    });

    // test spec -- test case #1
    it('should create the app', () => {
      // Act
      // fixture will have both the template (html) and the class (ts)
      const fixture = TestBed.createComponent(AppComponent);
      // Taking up the and creating an obj for component class for testing
      const app = fixture.componentInstance; 
      // Assert
      // Create an expectation for a spec.
      expect(app).toBeTruthy();
    });
  
    // test spec #2
    it(`should have as title 'Todo App Unit Testing!'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      // expect the actual to be as per your requirement
      expect(app.title).toEqual('Unit Testing Demo');
    });
  
    // test spec #3
    it('should render title', () => {
      // act
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges(); // Trigger a change detection cycle for the component.
      const compiled = fixture.nativeElement as HTMLElement; // Taking up the whole app.comp.html for testing
      
      // assert
      expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to Unit Testing Tutorial!');
    });
    
  }
);

