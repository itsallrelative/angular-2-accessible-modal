Angular 2 Accessible Modal
==========================

Getting started
-------

To use, copy the modal component folder into your app, import into your main app module, and add it to your modules declarations.

Then, add an `<app-modal #modal></app-modal>` element to your page. 

By using a variable in the element (`#modal`), you can target it with a button: 

    <app-modal #modal>
	    Your modal content goes here
    </app-modal>
    <button (click)="modal.openModal()">Open Modal</button>

The modal variable name can be whatever you wish, so you can have multiple modals on the page.

## Features ##

 - Has all necessary aria roles assigned to the main wrapping template. Updates aria roles when opened and closed.
 - Auto focuses on the modal window when it is opened.
 - Closes the modal when the escape key is pressed. 
 - Resets focus to the last focused element on the page when the modal is closed.
 - .screen-reader-text class, to visually hide elements from users, but will be read by screen readers: [screen reader text example](https://make.wordpress.org/accessibility/2015/02/09/hiding-text-for-screen-readers-with-wordpress-core/)

## Options ##
You can change the modal header and footer text by changing the `[modaltitle]` and `[modalfootertitle]` respectively. 

    <app-modal #modal [modaltitle]="'This is the title'" [modalfootertitle]="'This is the footer title'">
	    Your modal content goes here
    </app-modal>
If either attribute is blank, the header or footer will not be shown. 

Set the modals `aria-describedBy` element, by setting the `[modaldescription]` attribute: 

    <app-modal #modal [modaldescription]="'This is an example accessible modal'">
	    Your modal content goes here
    </app-modal>

## Todo ##

 - Make modal it's own NgModule, so that it can be imported correctly.
 - Fix tabbing, so that when the user tabs on the last element, it returns focus to the first element in the modal. If the user is on the first element, then shift+tab should focus to the last element.
 - Figure out a way to hide main content not in modal container with aria-hidden="true", without hiding the modal. 

