import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Это будет заменено на реальные данные из CMS или API
const blogPosts = [
  {
    id: 1,
    title: "Архитектурные паттерны в iOS: MVVM vs MVC",
    slug: "architectural-patterns-ios-mvvm-vs-mvc",
    excerpt:
      "Сравнение популярных архитектурных паттернов в iOS разработке. Когда использовать MVVM, а когда достаточно MVC?",
    date: "2024-03-15",
    readTime: "8 мин",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Swift", "Архитектура", "MVVM", "MVC"],
    content: `
      <h2>Введение в архитектурные паттерны iOS</h2>
      <p>Выбор правильной архитектуры для iOS-приложения — один из ключевых факторов, определяющих его успех в долгосрочной перспективе. Хорошая архитектура делает код более читаемым, тестируемым и масштабируемым, что особенно важно для проектов, которые будут развиваться и поддерживаться в течение длительного времени.</p>
      
      <p>В этой статье мы рассмотрим два наиболее популярных архитектурных паттерна в iOS-разработке: MVC (Model-View-Controller) и MVVM (Model-View-ViewModel), их преимущества, недостатки и сценарии использования.</p>
      
      <h2>MVC: Классический подход Apple</h2>
      <p>MVC — это архитектурный паттерн, который Apple изначально рекомендовала для разработки iOS-приложений. Он разделяет приложение на три компонента:</p>
      
      <ul>
        <li><strong>Model (Модель)</strong>: Отвечает за данные и бизнес-логику приложения.</li>
        <li><strong>View (Представление)</strong>: Отвечает за отображение данных пользователю.</li>
        <li><strong>Controller (Контроллер)</strong>: Связующее звено между Model и View, обрабатывает пользовательский ввод и обновляет модель и представление.</li>
      </ul>
      
      <p>В теории, это разделение должно обеспечивать чистую и понятную структуру кода. Однако на практике в iOS-разработке контроллеры часто становятся перегруженными, что приводит к появлению так называемых "Massive View Controllers" (массивных контроллеров представления).</p>
      
      <h3>Пример MVC в Swift</h3>
      <pre><code>
// Model
struct User {
    let id: Int
    let name: String
    let email: String
}

// View
class UserView: UIView {
    let nameLabel = UILabel()
    let emailLabel = UILabel()
    
    func configure(with user: User) {
        nameLabel.text = user.name
        emailLabel.text = user.email
    }
}

// Controller
class UserViewController: UIViewController {
    let userView = UserView()
    var user: User?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(userView)
        
        // Загрузка данных пользователя
        loadUser()
    }
    
    func loadUser() {
        // Здесь может быть сетевой запрос или получение данных из базы
        user = User(id: 1, name: "Иван Иванов", email: "ivan@example.com")
        
        if let user = user {
            userView.configure(with: user)
        }
    }
}
      </code></pre>
      
      <h2>MVVM: Современный подход к iOS-архитектуре</h2>
      <p>MVVM (Model-View-ViewModel) — это архитектурный паттерн, который стал популярным в iOS-разработке как решение проблемы "Massive View Controllers". Он разделяет приложение на следующие компоненты:</p>
      
      <ul>
        <li><strong>Model (Модель)</strong>: Как и в MVC, отвечает за данные и бизнес-логику.</li>
        <li><strong>View (Представление)</strong>: Включает в себя UI-компоненты и контроллеры представления.</li>
        <li><strong>ViewModel (Модель представления)</strong>: Промежуточный слой между Model и View, который обрабатывает бизнес-логику представления и предоставляет данные в формате, готовом для отображения.</li>
      </ul>
      
      <p>MVVM особенно хорошо работает с реактивным программированием (например, с использованием Combine или RxSwift), что позволяет создавать более декларативный код.</p>
      
      <h3>Пример MVVM в Swift</h3>
      <pre><code>
// Model
struct User {
    let id: Int
    let name: String
    let email: String
}

// ViewModel
class UserViewModel {
    private var user: User?
    
    var nameText: String {
        return user?.name ?? ""
    }
    
    var emailText: String {
        return user?.email ?? ""
    }
    
    func loadUser(completion: @escaping () -> Void) {
        // Имитация асинхронной загрузки данных
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            self.user = User(id: 1, name: "Иван Иванов", email: "ivan@example.com")
            completion()
        }
    }
}

// View
class UserViewController: UIViewController {
    let nameLabel = UILabel()
    let emailLabel = UILabel()
    let viewModel = UserViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        
        viewModel.loadUser { [weak self] in
            self?.updateUI()
        }
    }
    
    func setupUI() {
        // Настройка UI-элементов
    }
    
    func updateUI() {
        nameLabel.text = viewModel.nameText
        emailLabel.text = viewModel.emailText
    }
}
      </code></pre>
      
      <h2>Когда использовать MVC, а когда MVVM?</h2>
      <p>Выбор между MVC и MVVM зависит от нескольких факторов:</p>
      
      <h3>Используйте MVC, если:</h3>
      <ul>
        <li>Вы разрабатываете небольшое приложение с простой логикой.</li>
        <li>Вам нужно быстро создать прототип.</li>
        <li>Вы новичок в iOS-разработке и хотите начать с более простой архитектуры.</li>
      </ul>
      
      <h3>Используйте MVVM, если:</h3>
      <ul>
        <li>Вы работаете над сложным приложением с богатой бизнес-логикой.</li>
        <li>Вам важна тестируемость кода.</li>
        <li>Вы используете реактивное программирование (Combine, RxSwift).</li>
        <li>Вы хотите избежать проблемы "Massive View Controllers".</li>
      </ul>
      
      <h2>Заключение</h2>
      <p>И MVC, и MVVM имеют свои преимущества и недостатки. MVC проще в освоении и хорошо подходит для небольших проектов, в то время как MVVM обеспечивает лучшую масштабируемость и тестируемость для более сложных приложений.</p>
      
      <p>В моей практике я часто использую MVVM для большинства проектов, так как он обеспечивает лучшую организацию кода и упрощает тестирование. Однако для простых экранов или прототипов MVC может быть более эффективным решением.</p>
      
      <p>Важно помнить, что архитектура — это инструмент, а не самоцель. Выбирайте тот подход, который лучше всего соответствует требованиям вашего проекта и стилю работы вашей команды.</p>
    `,
  },
  // Другие статьи...
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Статья не найдена",
      description: "Запрашиваемая статья не найдена",
    }
  }

  return {
    title: `${post.title} | Блог iOS разработчика`,
    description: post.excerpt,
    keywords: post.tags.join(", ") + ", iOS разработка, Swift",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Максим Артемов"],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#1d1d1f]">
      <Header />

      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Назад к блогу
            </Link>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>

              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString("ru-RU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>

              <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Автор</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%91%D0%B5%D0%B7%D0%9B%D0%BE%D0%B3%D0%BE.jpg-ho9QHk4vfc6WbUno4I6Uc7mqvM0J8I.jpeg"
                        alt="Максим Артемов"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Максим Артемов</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">iOS Разработчик</p>
                    </div>
                  </div>
                </div>

                <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  <Share2 className="mr-2 h-5 w-5" />
                  Поделиться
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

