import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentSales from "../components/dashboard/RecentSales";
import Chart from "../components/dashboard/Chart";
import { prisma } from "@/app/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";

const getData = async () => {
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);
  const data = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: sevenDaysAgo,
      },
    },
    select: {
      amount: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const result = data.map((item) => ({
    date: new Intl.DateTimeFormat("en-US").format(item.createdAt),
    revenue: item.amount / 100,
  }));

  return result;
};

const Dashboard = async() => {
  noStore();
  const data = await getData();
  return (
    <div>
      <DashboardStats />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Recent Transactions from last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <Chart data={data}/>
          </CardContent>
        </Card>
        <RecentSales />
      </div>
    </div>
  );
};

export default Dashboard;
