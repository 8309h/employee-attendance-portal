let timer;

export const startAutoLogout = (logoutFn) => {
      const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(logoutFn, 15 * 60 * 1000);
      };

      window.onload = resetTimer;
      document.onmousemove = resetTimer;
      document.onkeypress = resetTimer;
};