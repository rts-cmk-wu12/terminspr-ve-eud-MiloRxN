'use server';
import { cookies } from 'next/headers';

/**
 * Get user information from cookies.
 * Can be used in both server components and middleware.
 * @param {Request} request - Optional request object for middleware usage
 * @returns {Object} Object containing user information with isInstructor flag
 */
export async function getUserInfo(request = null) {
  let userInfoCookie;
  
  if (request) {
    userInfoCookie = request.cookies.get('user_info');
  } else {
    const cookieStore = await cookies();
    userInfoCookie = cookieStore.get('user_info');
  }
  
  if (!userInfoCookie) {
    return { 
      isAuthenticated: false, 
      isInstructor: false, 
      userId: null,
      username: null,
      role: null
    };
  }
  
  try {
    const userInfo = JSON.parse(userInfoCookie.value);
    const isInstructor = userInfo.role === 'instructor';
    
    return {
      isAuthenticated: true,
      isInstructor: isInstructor,
      userId: userInfo.userId,
      username: userInfo.username,
      role: userInfo.role
    };
  } catch (error) {
    console.error('Error parsing user info:', error);
    return { 
      isAuthenticated: false, 
      isInstructor: false, 
      userId: null,
      username: null,
      role: null
    };
  }
}
