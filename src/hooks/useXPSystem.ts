import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';

interface UserData {
  xp: number;
  level: number;
  streak: number;
  badges: string[];
}

export const useXPSystem = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState<UserData>({
    xp: 0,
    level: 1,
    streak: 0,
    badges: [],
  });

  useEffect(() => {
    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  const fetchUserData = async () => {
    if (!currentUser) return;

    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
    if (userDoc.exists()) {
      setUserData(userDoc.data() as UserData);
    }
  };

  const addXP = async (amount: number) => {
    if (!currentUser) return;

    const newXP = userData.xp + amount;
    const newLevel = Math.floor(newXP / 100) + 1;

    await updateDoc(doc(db, 'users', currentUser.uid), {
      xp: newXP,
      level: newLevel,
    });

    setUserData((prev) => ({ ...prev, xp: newXP, level: newLevel }));
  };

  const incrementStreak = async () => {
    if (!currentUser) return;

    const newStreak = userData.streak + 1;
    await updateDoc(doc(db, 'users', currentUser.uid), {
      streak: newStreak,
    });

    setUserData((prev) => ({ ...prev, streak: newStreak }));
  };

  const addBadge = async (badge: string) => {
    if (!currentUser || userData.badges.includes(badge)) return;

    const newBadges = [...userData.badges, badge];
    await updateDoc(doc(db, 'users', currentUser.uid), {
      badges: newBadges,
    });

    setUserData((prev) => ({ ...prev, badges: newBadges }));
  };

  return { userData, addXP, incrementStreak, addBadge, refreshData: fetchUserData };
};
