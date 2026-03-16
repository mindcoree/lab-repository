import { GetServerSideProps } from "next";
import { User, Notification, getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";
import styles from "@/styles/Dashboard.module.css";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
  const numberFormatter = new Intl.NumberFormat("en-US");
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className={styles.dashboard}>
      <header>
        <h1>Welcome, {user.name}</h1>
        <p>Role: {user.role}</p>
      </header>

      <section className={styles.analytics}>
        <h2>Analytics</h2>
        <div className={styles.stats}>
          <div>Page Views: {numberFormatter.format(analytics.pageViews)}</div>
          <div>Sessions: {numberFormatter.format(analytics.sessions)}</div>
          <div>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</div>
        </div>
      </section>

      <section className={styles.notifications}>
        <h2>Notifications ({unreadCount} unread)</h2>
        <ul>
          {notifications.map(notif => (
            <li key={notif.id} className={notif.read ? styles.read : styles.unread}>
              <span className={`${styles.type} ${styles[notif.type]}`}>{notif.type}</span>
              {notif.message}
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>Last updated: {currentTime}</p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};
