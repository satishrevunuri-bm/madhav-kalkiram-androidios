with open('src/app/home/home.page.html', 'r', encoding='utf-8') as f:
    content = f.read()

footer = '''
  <!-- Home Footer with Legal & Settings links -->
  <footer class="home-legal-footer" style="text-align: center; padding: 24px 16px 40px; border-top: 1px solid #e2d9c8; margin-top: 24px;">
    <p style="font-size: 0.8rem; color: #854d0e; font-weight: 600; margin-bottom: 8px;">
      ॥ Jaya Śrī Mādhava ॥
    </p>
    <div style="display: flex; justify-content: center; gap: 12px; font-size: 0.78rem; color: #64748b; margin-bottom: 8px;">
      <a routerLink="/tabs/settings" style="color: #996515; text-decoration: none; font-weight: 500; cursor: pointer;">Privacy Policy</a>
      <span>•</span>
      <a routerLink="/tabs/settings" style="color: #996515; text-decoration: none; font-weight: 500; cursor: pointer;">Terms &amp; Conditions</a>
      <span>•</span>
      <a routerLink="/tabs/settings" style="color: #996515; text-decoration: none; font-weight: 500; cursor: pointer;">About App</a>
    </div>
    <p style="font-size: 0.72rem; color: #94a3b8; margin: 0;">
      &copy; 2026 kalkiram_madhav · Devotees of Lord Madhav
    </p>
  </footer>
'''

target = '</main></ion-content>'
if target in content:
    new_content = content.replace(target, footer + target)
    with open('src/app/home/home.page.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SUCCESS')
else:
    print('NOT_FOUND')

