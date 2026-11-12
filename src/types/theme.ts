export type ThemeColors = {
  primary: string; // اللون الأساسي: الأزرار والروابط
  primaryForeground: string; // لون النص فوق اللون الأساسي
  secondary: string; // لون ثانوي للتفاصيل
  background: string; // خلفية الصفحة
  surface: string; // خلفية البطاقات
  foreground: string; // لون النص الأساسي
  muted: string; // نص ثانوي أخف
  border: string; // الحدود
};

export type Theme = {
  colors: ThemeColors;
  radius: string;
};
