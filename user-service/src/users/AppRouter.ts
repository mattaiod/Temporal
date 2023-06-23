// import {initTRPC} from "@trpc/server";
// import * as trpcExpress from "@trpc/server/";
// import {string, z} from "zod";
//
// const t= initTRPC.create();
// const appRouter = t.router({
//     users: t.procedure.input(
//         z.object({name: string()})
// ).query(({ input }) => {
//         return "usersService.findAll()";
//     })
// });
//
// export type AppRouter = typeof appRouter;
// export default trpcExpress({
//     router: appRouter,
//     createContext: () => ({})
// })