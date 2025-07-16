# دليل نشر موقع سياسة الخصوصية على GitHub Pages

## 📋 الخطوات المطلوبة لرفع الموقع

### 1. إنشاء حساب GitHub (إذا لم يكن لديك حساب)
- اذهب إلى [github.com](https://github.com)
- انقر على "Sign up"
- أكمل عملية التسجيل

### 2. إنشاء مستودع جديد (Repository)
1. انقر على "+" في الزاوية العلوية اليمنى
2. اختر "New repository"
3. اسم المستودع: `enjaz-privacy-policy`
4. اجعل المستودع **Public** (مهم للـ GitHub Pages المجاني)
5. ✅ اختر "Add a README file"
6. انقر على "Create repository"

### 3. رفع ملفات الموقع

#### الطريقة الأولى: عبر واجهة GitHub (الأسهل)
1. في صفحة المستودع، انقر على "uploading an existing file"
2. اسحب وأفلت جميع الملفات من مجلد `web_privacy_policy`:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
   - مجلد `assets` (مع الصور بداخله)
3. في خانة "Commit changes":
   - العنوان: "Add privacy policy website files"
   - الوصف: "Initial upload of ENJAZ privacy policy website"
4. انقر على "Commit changes"

#### الطريقة الثانية: عبر Git (للمطورين)
```bash
# استنساخ المستودع
git clone https://github.com/your-username/enjaz-privacy-policy.git
cd enjaz-privacy-policy

# نسخ الملفات
cp -r /path/to/web_privacy_policy/* .

# إضافة الملفات
git add .
git commit -m "Add privacy policy website files"
git push origin main
```

### 4. تفعيل GitHub Pages
1. اذهب إلى صفحة المستودع
2. انقر على "Settings" (في شريط التبويب العلوي)
3. انتقل إلى قسم "Pages" في القائمة الجانبية
4. في "Source":
   - اختر "Deploy from a branch"
   - اختر "main" branch
   - اختر "/ (root)" folder
5. انقر على "Save"

### 5. الحصول على رابط الموقع
- بعد بضع دقائق، ستحصل على رابط مثل:
- `https://your-username.github.io/enjaz-privacy-policy/`
- استبدل `your-username` باسم المستخدم الخاص بك

### 6. تحديث الروابط في الملفات
قم بتحديث الروابط التالية في الملفات:

#### في `index.html`:
```html
<meta property="og:url" content="https://your-username.github.io/enjaz-privacy-policy/">
```

#### في `robots.txt`:
```
Sitemap: https://your-username.github.io/enjaz-privacy-policy/sitemap.xml
```

#### في `sitemap.xml`:
```xml
<loc>https://your-username.github.io/enjaz-privacy-policy/</loc>
```

### 7. اختبار الموقع
1. افتح الرابط في المتصفح
2. تأكد من:
   - ✅ تحميل الصفحة بشكل صحيح
   - ✅ عمل تبديل اللغة
   - ✅ ظهور اللوجو والصور
   - ✅ التصميم المتجاوب على الهاتف
   - ✅ عمل جميع الروابط

## 🔧 استخدام الرابط في Google Play Console

### 1. تسجيل الدخول إلى Google Play Console
- اذهب إلى [play.google.com/console](https://play.google.com/console)

### 2. اختيار التطبيق
- اختر تطبيق ENJAZ من قائمة التطبيقات

### 3. إضافة رابط سياسة الخصوصية
1. اذهب إلى "Policy" → "App content"
2. ابحث عن "Privacy Policy"
3. انقر على "Start" أو "Manage"
4. أدخل الرابط: `https://your-username.github.io/enjaz-privacy-policy/`
5. احفظ التغييرات

### 4. مراجعة المتطلبات الأخرى
تأكد من استكمال:
- ✅ Target audience (الجمهور المستهدف)
- ✅ Content rating (تصنيف المحتوى)
- ✅ Data safety (أمان البيانات)
- ✅ Government apps (إذا كان مناسباً)

## 🚀 نصائح مهمة

### للحفاظ على الموقع محدث:
1. **راجع المحتوى دورياً** - تأكد من دقة المعلومات
2. **حدث التاريخ** - في ملف `script.js` يتم تحديث التاريخ تلقائياً
3. **اختبر الروابط** - تأكد من عمل جميع الروابط
4. **راقب الأداء** - استخدم Google Analytics إذا أردت

### للأمان:
- ✅ **لا تضع معلومات حساسة** في المستودع العام
- ✅ **استخدم HTTPS** دائماً (GitHub Pages يوفر هذا تلقائياً)
- ✅ **احتفظ بنسخة احتياطية** من الملفات

### للـ SEO:
- ✅ **استخدم عناوين وصفية** في المحتوى
- ✅ **أضف meta descriptions** مناسبة
- ✅ **تأكد من سرعة التحميل** (الموقع محسن بالفعل)

## 🔄 تحديث الموقع لاحقاً

لتحديث المحتوى:
1. عدل الملفات في مجلد `web_privacy_policy`
2. ارفع الملفات المحدثة إلى GitHub
3. الموقع سيتحدث تلقائياً خلال دقائق

## 📞 الدعم الفني

إذا واجهت مشاكل:
1. **GitHub Pages Status**: [githubstatus.com](https://githubstatus.com)
2. **GitHub Docs**: [docs.github.com/pages](https://docs.github.com/pages)
3. **Google Play Help**: [support.google.com/googleplay](https://support.google.com/googleplay)

## ✅ قائمة التحقق النهائية

قبل استخدام الرابط في Google Play:
- [ ] الموقع يفتح بدون أخطاء
- [ ] تبديل اللغة يعمل بشكل صحيح
- [ ] المحتوى دقيق ومحدث
- [ ] التصميم يعمل على الهاتف والكمبيوتر
- [ ] الرابط يعمل من أجهزة مختلفة
- [ ] لا توجد أخطاء في وحدة تحكم المتصفح

**مبروك! موقع سياسة الخصوصية جاهز للاستخدام في Google Play Store! 🎉**
