import { initTRPC } from "@trpc/server";
import { GetUser, GetUserIds, UserId } from "./schema";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const t = initTRPC.create();

const router = t.router({
  getUserIds: t.procedure
    .output(GetUserIds.output)
    .query(() => Array(1000).map((_, i) => i as UserId)),
  getUser: t.procedure
    .input(GetUser.input)
    .output(GetUser.output)
    .query(({ input }) => {
      return {
        id: input.id,
        name: "John Doe",
      };
    }),
});

export type UserRouter = typeof router;

createHTTPServer({ router: router }).listen(3000);
