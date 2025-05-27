import { McpAgent } from '@modelcontextprotocol/sdk/server/index.js';
import { server } from '../../../packages/mcp-server/src/server';
import Instantly2 from 'instantly2';
import { init } from '../../../packages/mcp-server/src/init';

export class MyMCP extends McpAgent {
  server = server;
  env: any;

  constructor() {
    super();
    this.server = server;
  }

  async init() {
    const client = new Instantly2({
      apiKey: this.env.INSTANTLY2_API_KEY,
    });

    await init({ server: this.server, client });
  }
}

// Export the handler for Wrangler
export default {
  async fetch(request: Request, env: any, ctx: any) {
    const mcp = new MyMCP();
    mcp.env = env;
    return mcp.fetch(request, env, ctx);
  },
};
