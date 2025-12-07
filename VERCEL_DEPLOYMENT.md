# Vercel Deployment Guide

## التطبيق على Vercel

### المتطلبات
- حساب على Vercel
- GitHub/GitLab/Bitbucket repository (اختياري)

### طريقة النشر

#### الطريقة 1: من خلال Vercel Dashboard
1. قم بتسجيل الدخول إلى [Vercel](https://vercel.com)
2. اضغط على "New Project"
3. اربط المستودع الخاص بك أو قم برفع المشروع
4. Vercel سيتعرف تلقائياً على إعدادات Angular من `vercel.json`
5. اضغط على "Deploy"

#### الطريقة 2: من خلال Vercel CLI
```bash
# تثبيت Vercel CLI
npm i -g vercel

# نشر المشروع
vercel

# للنشر إلى Production
vercel --prod
```

### ملفات الإعدادات

- **vercel.json**: إعدادات Vercel الرئيسية
- **.vercelignore**: الملفات التي سيتم تجاهلها عند النشر
- **package.json**: يحتوي على `vercel-build` script

### Environment Variables
قم بإضافة المتغيرات البيئية من خلال Vercel Dashboard:
- Settings → Environment Variables

أو استخدم ملف `vercel.env.example` كمرجع.

### Build Settings
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist/freshcart`
- **Install Command**: `npm install`

### Routes Configuration
جميع الروoutes يتم توجيهها إلى `index.html` لدعم Angular Router.

### Cache Headers
- Assets (صور، خطوط، إلخ): Cache لمدة سنة
- JS/CSS files: Cache لمدة سنة

### ملاحظات
- تأكد من أن Node.js version هو 18.x أو أحدث (موجود في `package.json`)
- تأكد من أن جميع Environment Variables مُعرّفة في Vercel Dashboard
- بعد النشر، ستجد رابط للموقع النهائي

