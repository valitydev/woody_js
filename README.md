# Woody js

Browser-Compatible Node.js Thrift Binary Protocol Connection

## Installation

```bash
npm install @vality/woody
```

## Usage Example

```typescript
import connectClient from '@vality/woody';

const host = 'localhost';
const port = '8080';
const path = '/some/path';

// Generated Thrift client
const genClient = {
    /* ... your thrift client ... */
};

// Connection options
const connectOptions = {
    https: true,
    // ... other options ...
};

// Error callback
const errorCb = (err) => {
    console.error('An error occurred:', err);
};

// Create a client connection
const client = connectClient(host, port, path, genClient, connectOptions, errorCb);

// Now you can use 'client' to interact with Thrift service
```
