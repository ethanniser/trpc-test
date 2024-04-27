import z from "zod";

export const UserId = z.number().int().brand("UserId");
export type UserId = z.infer<typeof UserId>;

export const User = z.object({
  id: UserId,
  name: z.string(),
});

export const GetUserIds = {
  output: z.array(UserId),
};

export const GetUser = {
  input: z.object({
    id: UserId,
  }),
  output: User,
};
