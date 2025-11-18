# MindsEye Data Splitter Architecture

The Data Splitter is the routing hub of the MindsEye OS.

It:

- accepts events from Chrome, Android, Workspace, and other nodes  
- applies split rules to generate targeted fragments  
- converts payload formats (json, binary, text)  
- attaches LAW-T / LAW-N metadata where needed  
- routes outputs toward:
  - Binary Engine
  - Moving Library
  - Ledger / Devlog
  - Analytics
  - Default sinks
