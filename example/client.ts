import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { UserRouter } from "./server";

const client = createTRPCClient<UserRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

const ids = await client.getUserIds.query();
const users = await Promise.all(ids.map((id) => client.getUser.query({ id })));
