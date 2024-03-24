import AccordionItem from "@/components/AccordionItem";
import { FAQs } from "@/faq";

export default function Faq() {
  return (
    <section className="relative z-20 overflow-hidden bg-gray-800 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] w-2/3 text-center lg:mb-20">
              <h2 className="mb-4 md:w-full text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Frequently Asked Questions
              </h2>
              <p className="text-base m-auto text-justify max-w-[520px] text-body-color dark:text-dark-6">
                Welcome to our FAQs section! Here, you will find answers to
                commonly asked questions about our website and services. If you
                canot find the information you are looking for, feel free to
                reach out to our support team for assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="m-auto md:w-2/3 px-10">
          {FAQs.map((item, count = 1) => {
            return (
              <AccordionItem
                key={count + 1}
                header={item.question}
                text={item.answer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
