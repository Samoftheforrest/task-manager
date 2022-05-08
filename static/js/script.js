$(document).ready(function() {
    // Open mobile nav
    $('.sidenav').sidenav({edge: "right"});

    // Open task accordions
    $('.collapsible').collapsible();

    // Display urgent message on tasks
    $('.tooltipped').tooltip();

    // Select date when creating tasks
    $('.datepicker').datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
})