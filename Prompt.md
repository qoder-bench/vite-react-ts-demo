# New Requirement 1

Adjust the app.tsx page layout to include top navigation bar, left sidebar menu, and bottom information bar, with content area in the middle.

- Top navigation bar contains application name, Logo, and user information.
- Left sidebar menu contains navigation links, such as Home, Settings, Help, etc.
- Bottom information bar mainly displays prompt information after operations: text prompt on the left, and an icon on the far right. Click to show recent prompt information.
- Content area should support dynamic loading of different page content

Add two content area components:

- Dashboard component (default): Displays the main statistics and charts of the application.
- Settings component: Displays system configuration options, such as theme, notification settings, etc.


# New Requirement 2

Implement a complete "Collaborative Whiteboard" feature module:

Functional Requirements:

Multi-user real-time collaborative drawing board

Support basic shapes: lines, rectangles, circles, freehand brush
Support shape selection, move, delete, undo/redo
Real-time display of different users' cursor positions (display username)
WebSocket Real-time Communication

Implement client-side WebSocket connection management
Implement real-time broadcast and reception of drawing operations
Handle connection disconnection and reconnection logic
State Management

Use Redux Toolkit to manage whiteboard state
Manage online user list
Operation history (support undo/redo)
UI Interaction

Toolbar: Select drawing tools, colors, line thickness
Sidebar: Display online user list
Responsive design, support desktop and tablet
Technical Requirements:

Use Canvas API or SVG to implement drawing
Customize WebSocket message protocol (JSON format)
Use TypeScript strict mode
Component-based design, reasonable separation of responsibilities
Error handling and edge case handling
No need to implement backend service, can use Mock WebSocket or Socket.io client.


