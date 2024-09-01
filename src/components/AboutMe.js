import '../cssFiles/AboutMe.css';

const AboutMe = () => {
    return (
        <div className='info-data'>
            <section class="about-me">
                <h2>קצת עלי:</h2>
                <ul className='my-list'>
                    <li><strong>שמי:</strong> מורן צ׳רי</li>
                    <li><strong>תואר ראשון:</strong> הנדסת מערכות מידע מאוניברסיטת בן-גוריון</li>
                    <li><strong>ניסיון מקצועי:</strong> מפתחת Full Stack בחברת אמדוקס.</li>
                    <li><strong>לימודים נוספים:</strong> לומדת לתואר שני במנהל עסקים, חקרתי את נושא ריבית דריבית במסגרת קורס מימון.</li>
                </ul>
            </section>

            <section class="website-purpose">
                <h2>מטרת האתר:</h2>
                <p>בהשראת לימודי התואר השני, הקמתי אתר ייחודי המחשב את השפעת ריבית דריבית.</p>
                <p className='main-functions'>פונקציות עיקריות:</p>
                <o>
                    <li>המרת סכום ראשוני להכנסה פסיבית לאורך זמן.</li>
                    <li>חישוב הצמיחה של סכום השקעה מבלי לפגוע בסכום הראשוני.</li>
                    <li>חישוב נתוני אינפציה ומיסים.</li>
                </o>
            </section>
        </div>
    )
}

export default AboutMe;