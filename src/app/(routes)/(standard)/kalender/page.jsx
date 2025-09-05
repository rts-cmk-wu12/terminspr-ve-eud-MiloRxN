import { getUserInfo } from "@/utils/get-user-info";
import fetchUser from "@/utils/fetch-user";
import CalendarContainer from "@/components/ui/calendar-container";

export const metadata = {
  title: "Kalender"
};

export default async function CalendarPage() {
  const { isInstructor, userId } = await getUserInfo();
  
  let user = null;
  if (userId) {
    user = await fetchUser(`users/${userId}`);
  }

  return (
    <CalendarContainer user={user} isInstructor={isInstructor} />
  );
}