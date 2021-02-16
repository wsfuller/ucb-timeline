$(document).ready(function () {
  toggleSidebar = function () {
    const sidebar = $('#sidebar');
    const sidebarCollapsed = 'sidebar--collapsed';
    const sidebarToggleButton = $('#sidebar-toggle-button');
    const buttonArrowCollapsed = 'zmdi-chevron-right';
    const buttonArrowOpen = 'zmdi-chevron-left';

    if (sidebar.hasClass(sidebarCollapsed)) {
      sidebar.removeClass(sidebarCollapsed);
      sidebarToggleButton
        .children()
        .removeClass(buttonArrowCollapsed)
        .addClass(buttonArrowOpen);
    } else {
      sidebar.addClass(sidebarCollapsed);
      sidebarToggleButton
        .children()
        .removeClass(buttonArrowOpen)
        .addClass(buttonArrowCollapsed);
    }
  };
});
