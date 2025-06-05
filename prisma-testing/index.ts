import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Ben",
  //       email: "ben@gmail.com",
  //     },
  //   });

  // Get all users
  //   const users = await prisma.user.findMany();

  // Get all users with articles
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });

  // Create article and associate it with user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Anne first article",
  //       body: "This is the article body",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });

  // Get all articles
  //   const articles = await prisma.article.findMany();

  // Create user and article and associate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Cath",
  //       email: "cath@gmail.com",
  //       articles: {
  //         create: {
  //           title: "Cath first article",
  //           body: "Article body",
  //         },
  //       },
  //     },
  //   });

  // Create another article
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Sample article",
  //       body: "Sample article body",
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

  // Loop over user article
  //   users.forEach((user) => {
  //     console.log(`User: ${user.name}, Email: ${user.email}`);
  //     console.log("Articles");
  //     user.articles.forEach((article) => {
  //       console.log(`- Title ${article.title}, Boyd: ${article.body}`);
  //     });
  //     console.log(`\n`);
  //   });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
