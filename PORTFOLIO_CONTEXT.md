# Portfolio Website Context

This file aggregates the current portfolio direction and source material available in the local project. It can be used as the working brief for future website updates.

## Identity

- Name: Amirul Hakim
- Email: amirulihakim@outlook.com
- LinkedIn: https://www.linkedin.com/in/amirulihakim/
- GitHub: https://github.com/amirulihakim
- Portfolio positioning: Mechanical Engineer focused on Industrial Automation, IIoT, and Mechatronics
- Core narrative: Mechanical foundation with a systems mindset, extending from machine-side design and manufacturing into instrumentation, data acquisition, automation, and robotics.

## Target Roles and Domains

- Industrial automation
- Field engineering
- Oil and gas
- Manufacturing systems
- Instrumentation and controls
- IIoT and industrial data systems
- Robotics and mechatronics

## Main Story

The portfolio should present Amirul as an engineer who can connect physical systems with digital monitoring and control. The story starts with mechanical drafting and manufacturing documentation, expands through industrial instrumentation and data acquisition, and points forward into PLC automation and robotics.

The strongest angle is not a generic software portfolio. It should feel like an engineering case-study portfolio, showing how mechanical systems, process data, automation logic, and validation fit together.

## Current Focus Areas

1. Industrial automation and PLC
2. Instrumentation and IIoT data systems
3. Mechanical design and manufacturing
4. Robotics and mechatronics

## Experience

### Industrial Monitoring and Data Acquisition

- Organization/context: Industrial internship at PT Timah Industri
- Focus: Real-time and historical monitoring workflow for industrial process data
- Technical material: Modbus, RS-485, MQTT, SQL storage, dashboard visualization
- Portfolio framing: A full industrial data chain from field measurement to acquisition, transport, storage, and visualization
- Useful tags: Modbus, MQTT, MySQL, Node-RED, Instrumentation

### Mechanical Drafting and Manufacturing Documentation

- Role/context: CAD Drafter
- Focus: Mechanical models and technical drawings for manufacturing-oriented work
- Technical material: Assemblies, components, fabrication details, design documentation
- Portfolio framing: Production-ready documentation and mechanical communication for manufacturing
- Useful tags: CAD, Technical Drawing, Manufacturing, Assemblies

### Micro-Milling of CP-Titanium Implant Geometry

- Context: Mechanical engineering research
- Focus: Effects of machining parameters on burr formation and dimensional accuracy
- Technical material: CAD/CAM, CNC machining, metrology, image analysis, experimental data interpretation
- Portfolio framing: Research-driven manufacturing project combining experiment design, machining, measurement, and analysis
- Useful tags: Micro-Milling, CP-Ti, Metrology, CAD/CAM, Research

## Project Set

### PT Timah Industrial Monitoring

- Category: Industrial Systems
- Status: Completed
- Summary: Real-time process monitoring from industrial measurement to MQTT, SQL history, and dashboard visualization
- Technologies: MQTT, MySQL, Modbus, Node-RED
- Suggested case-study sections: Problem, system architecture, data flow, implementation, validation, lessons learned

### CP-Titanium Micro-Milling

- Category: Research and Manufacturing
- Status: Completed
- Summary: Experimental study of burr height and dimensional accuracy in micro-machining of titanium implant geometry
- Technologies: CAD/CAM, CNC, Metrology, ImageJ
- Suggested case-study sections: Research question, experimental setup, parameter selection, measurement approach, results, interpretation

### Modular Roller Conveyor

- Category: Mechanical Design
- Status: Completed
- Summary: Assembly modeling and production documentation for straight, curved, roller, frame, and connection systems
- Technologies: Inventor, assemblies, BOM, drafting
- Suggested case-study sections: Design requirements, assembly structure, manufacturing details, drawing package, constraints

### Smart Workshop Monitoring

- Category: IIoT and Data
- Status: In Development
- Summary: Low-cost ESP32 monitoring platform with MQTT transport, SQL historian, event logging, and automated analysis
- Technologies: ESP32, SQL, MQTT, Dashboard
- Suggested case-study sections: Motivation, prototype architecture, data schema, dashboard, event logic, future validation

### PLC Process Automation

- Category: Automation
- Status: In Development
- Summary: Process simulation focused on PLC sequencing, interlocks, alarms, HMI, fault handling, and commissioning logic
- Technologies: TIA Portal, Factory I/O, PLC, HMI
- Suggested case-study sections: Process scenario, sequence logic, interlocks, alarms, HMI screens, test cases

### Robotic Arm Platform

- Category: Robotics
- Status: Planned
- Summary: Long-form mechatronics project integrating mechanical design, embedded control, ROS2, and motion planning
- Technologies: ROS2, ESP32, 3D printing, robotics
- Suggested case-study sections: Mechanical concept, actuator selection, embedded control, ROS2 integration, motion planning roadmap

## Website Content Direction

- Tone: Professional, technical, and grounded; avoid sounding like a generic startup landing page.
- First-screen signal: Amirul Hakim, engineering portfolio, mechanical/automation/IIoT/mechatronics positioning.
- Projects should read as engineering case studies, not just gallery cards.
- Emphasize real systems, data flow, validation, and manufacturing or field relevance.
- Keep future projects clearly marked as in development or planned.

## Website Structure

- Homepage: `index.html`
- Project pages folder: `projects/`
- Language switch: ENG and IND toggle in the header, managed by `script.js` with the selected language saved in `localStorage`
- PT Timah Industrial Monitoring: `projects/pt-timah-industrial-monitoring.html`
- CP-Titanium Micro-Milling: `projects/cp-titanium-micro-milling.html`
- Modular Roller Conveyor: `projects/modular-roller-conveyor.html`
- Smart Workshop Monitoring: `projects/smart-workshop-monitoring.html`
- PLC Process Automation: `projects/plc-process-automation.html`
- Robotic Arm Platform: `projects/robotic-arm-platform.html`

On GitHub Pages, these pages will open as separate URLs under the repository path, for example: `https://amirulihakim.github.io/repository-name/projects/pt-timah-industrial-monitoring.html`.

## Missing Information To Fill Later

- Resume PDF
- Project images, diagrams, CAD renders, screenshots, or dashboard captures
- Exact dates for internship, CAD work, research, and education
- Education details and certifications
- More measurable outcomes for completed projects
