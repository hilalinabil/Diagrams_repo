# Mermaid Diagrams for ALTEX Report

This folder contains all the UML diagrams used in the ALTEX Warehouse Management System report, created using Mermaid syntax.

## Diagrams Included

1. **class_diagram.md** - UML Class Diagram showing system architecture
2. **sequence_diagram.md** - UML Sequence Diagram for route optimization process
3. **usecase_diagram.md** - UML Use Case Diagram with actors and use cases
4. **component_diagram.md** - UML Component Diagram showing system components
5. **activity_diagram.md** - UML Activity Diagram for route optimization flow
6. **state_diagram.md** - UML State Diagram for Q-Learning state machine
7. **er_diagram.md** - Entity Relationship Diagram for database schema

## How to Compile to PNG

### Option 1: Using Mermaid CLI
```bash
# Install Mermaid CLI
npm install -g @mermaid-js/mermaid-cli

# Compile all diagrams
mmdc -i class_diagram.md -o class_diagram.png
mmdc -i sequence_diagram.md -o sequence_diagram.png
mmdc -i usecase_diagram.md -o usecase_diagram.png
mmdc -i component_diagram.md -o component_diagram.png
mmdc -i activity_diagram.md -o activity_diagram.png
mmdc -i state_diagram.md -o state_diagram.png
mmdc -i er_diagram.md -o er_diagram.png
```

### Option 2: Using Online Mermaid Editor
1. Go to https://mermaid.live/
2. Copy the content from each .md file
3. Paste into the editor
4. Export as PNG
5. Save with the corresponding filename

### Option 3: Using VS Code Extension
1. Install "Mermaid Preview" extension in VS Code
2. Open each .md file
3. Use the preview to export as PNG

## Diagram Specifications

- **Resolution**: High resolution (recommended 1920x1080 or higher)
- **Format**: PNG with transparent background
- **Naming**: Use exact filenames as referenced in the LaTeX document
- **Quality**: Ensure text is readable and diagrams are well-formatted

## Integration with LaTeX

The LaTeX document expects these PNG files to be in the `mermaid_diagrams/` folder. Make sure all diagrams are compiled and placed in the correct location before compiling the LaTeX document.

## Notes

- All diagrams use Mermaid syntax and are optimized for technical documentation
- Colors and styling are consistent across all diagrams
- Diagrams are designed to be self-contained and readable
- Each diagram includes proper labels and relationships
