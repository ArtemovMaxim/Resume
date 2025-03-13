"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer-en"

export default function FreelanceFraudClientPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#1d1d1f]">
      <Header />

      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/en/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                  Freelancing
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                  Self-Employment
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                  Labor Law
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                  Rights Protection
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Fraud in Freelancing and Self-Employment: How to Protect Your Rights
              </h1>

              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date("2024-03-20").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                20 min read
              </div>

              <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8">
                <Image
                  src="/blog/freelance-fraud.jpg"
                  alt="Fraud in Freelancing and Self-Employment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
              <h2>Introduction: Personal Experience and the Scale of the Problem</h2>

              <p>
                Over the years of working in IT development, I have encountered dishonest clients and employers three
                times. These cases forced me to deeply study the legal aspects of freelancing and self-employment in
                Russia. As it turned out, I am far from alone — according to a study by the FL.ru freelance marketplace,
                about 73% of freelancers have faced non-payment of fees at least once, and 42% have experienced
                significant payment delays.
              </p>

              <p>
                In this article, I will share not only my personal experience but also analyze the legal aspects of
                protecting the interests of freelancers and self-employed individuals in Russia, based on the opinions
                of lawyers, judicial practice, and expert recommendations.
              </p>

              <h2>Common Fraud Schemes in Freelancing</h2>

              <p>
                Before moving on to legal aspects, it's important to understand what types of fraud freelancers and
                self-employed individuals most often face:
              </p>

              <h3>1. Non-payment of fees after work completion</h3>

              <p>
                A classic scheme: the client receives the results of the work and simply disappears or starts making up
                reasons to refuse payment. In my first case, after receiving the application source code, the client
                stopped communicating, and the company turned out to be registered to a fictitious person.
              </p>

              <h3>2. "Test assignment" as a way to get free work</h3>

              <p>
                The client offers to complete a "small test assignment," which turns out to be a full-fledged commercial
                task. After completion, you are told that "you didn't qualify," while your work is used for commercial
                purposes.
              </p>

              <h3>3. Constant expansion of requirements without changing the payment</h3>

              <p>
                The initially agreed scope of work gradually expands ("can you add this too?"), but the payment remains
                the same. If you refuse to perform additional work, the client may use this as an excuse to refuse
                payment for the entire project.
              </p>

              <h3>4. Non-payment of the last part of salary when working with self-employed individuals</h3>

              <p>
                A company hires you as a self-employed individual, but in fact, you work as a regular employee. Upon
                termination, the company refuses to pay the last part of your compensation, knowing that you don't have
                the same guarantees as regular employees. This is the scheme I encountered the second time.
              </p>

              <h2>Legal Aspects of Protecting the Interests of Freelancers and Self-Employed Individuals</h2>

              <p>Now let's look at what legal mechanisms exist to protect your interests.</p>

              <h3>Contractual relationships: a key element of protection</h3>

              <p>
                According to Anna Ivanova, a lawyer specializing in labor law: "The main problem for freelancers is the
                absence of properly formalized contractual relationships. Without a contract, it is extremely difficult
                to prove the fact of work performance and payment obligations."
              </p>

              <p>In Russian legislation, relationships with freelancers can be formalized in several ways:</p>

              <ol>
                <li>
                  <strong>Contract for work (Articles 702-729 of the Civil Code of the Russian Federation)</strong> —
                  the most common form for one-time projects.
                </li>
                <li>
                  <strong>
                    Contract for the provision of paid services (Articles 779-783 of the Civil Code of the Russian
                    Federation)
                  </strong>{" "}
                  — suitable for services where the process is important, not a specific result.
                </li>
                <li>
                  <strong>Copyright contract (Article 1288 of the Civil Code of the Russian Federation)</strong> — for
                  creating works with the transfer of copyright.
                </li>
                <li>
                  <strong>Agency agreement (Articles 1005-1011 of the Civil Code of the Russian Federation)</strong> —
                  for representing the client's interests.
                </li>
              </ol>

              <p>
                For self-employed individuals, there is a special contract for the provision of services by a
                professional income tax payer.
              </p>

              <h3>Judicial practice: what the courts say</h3>

              <p>
                Analysis of judicial practice shows that courts often side with freelancers when the following evidence
                is present:
              </p>

              <ul>
                <li>A written contract with clearly defined conditions</li>
                <li>Correspondence confirming the agreement on work and its completion</li>
                <li>Acts of work acceptance</li>
                <li>Witness testimonies</li>
                <li>Drafts and intermediate work results</li>
              </ul>

              <p>
                Interestingly, even in the absence of a formal contract, courts can recognize the existence of
                contractual relationships based on correspondence and actual work performance (Resolution of the Plenum
                of the Supreme Court of the Russian Federation dated June 23, 2015, No. 25).
              </p>

              <h3>Features of the legal status of self-employed individuals</h3>

              <p>
                Self-employed individuals are in a special legal position. On the one hand, they do not have the labor
                guarantees provided by the Labor Code of the Russian Federation. On the other hand, they are protected
                by civil legislation as contractors under civil law contracts.
              </p>

              <p>
                Dmitry Petrov, a labor dispute lawyer, notes: "Companies often use self-employed individuals as regular
                employees, which is a violation. If a self-employed person can prove the presence of signs of labor
                relations (regular payment, compliance with internal regulations, performance of duties according to
                position), the court can recognize the relationship as labor with all the resulting guarantees."
              </p>

              <p>
                This is confirmed by the Resolution of the Plenum of the Supreme Court of the Russian Federation dated
                May 29, 2018, No. 15, which states that the court can recognize relations as labor regardless of their
                formal arrangement.
              </p>

              <h2>Practical Recommendations: How to Protect Yourself from Fraud</h2>

              <p>
                Based on personal experience and expert recommendations, I have compiled a list of practical measures
                that will help minimize risks:
              </p>

              <h3>1. Thorough client verification</h3>

              <ul>
                <li>
                  Check the legal entity through services like SPARK, Kontur.Focus, or for free through the Federal Tax
                  Service website
                </li>
                <li>Study reviews about the company on specialized forums and social networks</li>
                <li>Look for information about the company's management</li>
                <li>Request contacts of previous freelancers who worked with the company</li>
              </ul>

              <h3>2. Proper formalization of contractual relationships</h3>

              <ul>
                <li>Always conclude a written contract, even for small projects</li>
                <li>Clearly specify the scope of work, deadlines, and payment terms</li>
                <li>Include a clause on penalties for late payment</li>
                <li>Provide for the procedure for accepting work and making changes</li>
                <li>For large projects, divide the work into stages with interim payments</li>
              </ul>

              <h3>3. Documentation of all communications</h3>

              <ul>
                <li>Conduct correspondence in writing (email, messengers)</li>
                <li>Record all agreements and changes in requirements</li>
                <li>After verbal discussions, send a written summary of agreements</li>
                <li>Save all correspondence and documents</li>
              </ul>

              <h3>4. Prepayment and staged payment</h3>

              <ul>
                <li>Always take a prepayment (usually 30-50% of the project amount)</li>
                <li>For long-term projects, divide the payment into stages</li>
                <li>Do not transfer the final results of the work until full payment</li>
                <li>Use secure transaction services on freelance marketplaces</li>
              </ul>

              <h3>5. Specifics of working as a self-employed individual</h3>

              <ul>
                <li>Carefully analyze whether labor relations are being substituted with a self-employment contract</li>
                <li>Avoid situations where you work with only one client for a long time</li>
                <li>Do not comply with the company's internal regulations</li>
                <li>Keep receipts for payments received through the "My Tax" application</li>
              </ul>

              <h2>What to Do If You've Been Defrauded: Algorithm of Actions</h2>

              <p>If you still encounter a dishonest client, here is a step-by-step algorithm of actions:</p>

              <h3>1. Pre-trial settlement</h3>

              <ol>
                <li>Send an official claim with a payment demand and a deadline (usually 10 business days)</li>
                <li>
                  Send the claim by registered mail with delivery confirmation or via email with a request for receipt
                  confirmation
                </li>
                <li>Indicate in the claim that in case of non-payment, you will be forced to go to court</li>
              </ol>

              <h3>2. Preparation for court proceedings</h3>

              <ol>
                <li>
                  Collect all evidence of work completion (correspondence, intermediate results, witness testimonies)
                </li>
                <li>
                  Prepare a calculation of the amount of claims, including penalties and compensation for moral damage
                </li>
                <li>Consider the possibility of contacting a lawyer specializing in such cases</li>
              </ol>

              <h3>3. Going to court</h3>

              <ol>
                <li>For amounts up to 100,000 rubles — magistrate's court at the defendant's location</li>
                <li>For larger amounts — district court</li>
                <li>Prepare a statement of claim with all evidence attached</li>
                <li>Pay the state fee (the amount depends on the claim amount)</li>
              </ol>

              <h3>4. Alternative methods of protection</h3>

              <ul>
                <li>Contacting the administration of the freelance marketplace (if the work was found through it)</li>
                <li>Publishing a review about the dishonest client on specialized forums</li>
                <li>Contacting the Federal Tax Service if there are signs of tax evasion</li>
                <li>
                  For self-employed individuals in case of substitution of labor relations — contacting the labor
                  inspection
                </li>
              </ul>

              <h2>Document Templates for Protecting Your Rights</h2>

              <p>For practical application of the recommendations, I have prepared templates of the main documents:</p>

              <h3>1. Basic contract with the client</h3>

              <p>Key points that should be in the contract:</p>

              <ul>
                <li>Detailed description of the subject of the contract (what exactly you are doing)</li>
                <li>Work deadlines</li>
                <li>Cost of work and payment terms</li>
                <li>Procedure for acceptance of work</li>
                <li>Responsibility of the parties (penalty for late payment)</li>
                <li>Procedure for making changes to the technical specification</li>
                <li>Confidentiality conditions</li>
                <li>Dispute resolution procedure</li>
              </ul>

              <h3>2. Sample claim for non-payment of work</h3>

              <p>The claim should contain:</p>

              <ul>
                <li>Data about the client and contractor</li>
                <li>Reference to the contract and the fact of work completion</li>
                <li>Amount of debt with penalty calculation</li>
                <li>Payment demand with a deadline</li>
                <li>Warning about court proceedings in case of non-payment</li>
                <li>Payment details</li>
              </ul>

              <h3>3. Act of completed work</h3>

              <p>The act should contain:</p>

              <ul>
                <li>Data about the client and contractor</li>
                <li>Reference to the contract</li>
                <li>List of completed work</li>
                <li>Cost of work</li>
                <li>Confirmation of no claims from the client</li>
              </ul>

              <h2>Conclusion: My Personal Experience and Findings</h2>

              <p>
                After three cases of fraud, I developed a protection system for myself that has been working flawlessly
                so far. The main conclusion I made: prevention is always more effective than dealing with consequences.
                Thorough client verification, a competent contract, and prepayment are the three pillars on which a
                freelancer's security rests.
              </p>

              <p>
                The second important conclusion: knowledge of your rights and readiness to defend them often stops
                potential dishonest clients. When a client sees that you understand the legal aspects and are ready to
                go all the way, the likelihood of fraud is significantly reduced.
              </p>

              <p>
                And finally, the freelance community is a powerful protection tool. Share information about dishonest
                clients, consult with colleagues, participate in professional communities. Mutual support and exchange
                of experience help all of us work more safely and effectively.
              </p>

              <p>
                I hope this article will help you avoid the mistakes I made and make your work as a freelancer or
                self-employed individual more secure and profitable.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Author</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%91%D0%B5%D0%B7%D0%9B%D0%BE%D0%B3%D0%BE.jpg-ho9QHk4vfc6WbUno4I6Uc7mqvM0J8I.jpeg"
                        alt="Maxim Artemov"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Maxim Artemov</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">iOS Developer</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Fraud in Freelancing and Self-Employment: How to Protect Your Rights",
                        text: "Useful article about protecting the rights of freelancers and self-employed individuals",
                        url: window.location.href,
                      })
                    } else {
                      navigator.clipboard.writeText(window.location.href)
                      alert("Link copied to clipboard!")
                    }
                  }}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
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

