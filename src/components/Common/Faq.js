"use client";

import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Faq = () => {
  return (
    <>
      <section className="faq-area ptb-80" id="faq" style={{paddingBottom: "0px !important"}}>
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
            常见问题解答（FAQs）
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-12">
              <Accordion>
                <AccordionItem header="RAALC有何独特之处？">
                  <p>
                  RAALC融合国际法律专业能力与对阿联酋法规的深度理解，提供面向个人与企业的专业法律咨询与战略性解决方案，始终坚持透明服务与结果导向，全面保障客户权益。
                  </p>
                </AccordionItem>

                <AccordionItem header="我可以不亲自到场就获得法律咨询和代理服务吗？">
                  <p>
                  可以的。我们提供电话或视频的远程法律咨询服务，并可在获得经认证的委托书后，代表您在阿联酋境内进行法律代理——无论您身处阿联酋还是海外。
                  </p>
                </AccordionItem>

                <AccordionItem header="你们的服务是否涵盖房地产交易与纠纷的全程支持？">
                  <p>
                  当然涵盖。我们为房地产事务提供全程法律支持，包括买卖交易、合同审查、文件处理及纠纷解决，涵盖项目延期、取消等各类问题，全方位保障您的权益。
                  </p>
                </AccordionItem>

                <AccordionItem header="你们如何协助企业在阿联酋注册成立公司？">
                  <p>
                  我们会全程引导您完成公司设立流程——从选择合适的法律架构、办理营业执照，到完成注册及全面符合法规要求，确保您的企业在阿联酋有一个坚实合法的起点。
                  </p>
                </AccordionItem>

                <AccordionItem header="你们能协助我追回退票支票或未结清的债务吗？">
                  <p>
                  可以的。我们可通过友好协商或正式法律程序，为您提供债务追偿与支票执行的法律代理服务，帮助您合法高效地追回应收款项。
                  </p>
                </AccordionItem>

                <AccordionItem header="RAALC是否适合处理公司或商业纠纷？">
                  <p>
                  是的。我们代理企业通过诉讼或机构仲裁处理各类复杂纠纷。我们的解决方案旨在最大限度降低损失，同时维护企业的长期合作关系。
                  </p>
                </AccordionItem>

                <AccordionItem header="你们的托管服务有哪些优势？">
                  <p>
                  我们的托管服务为房地产及商业交易提供安全、中立的法律保障机制。在所有合同条件达成之前，资金将被妥善保管，从而确保交易过程的透明性、合规性与各方信任。
                  </p>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="col-lg-5 col-md-12">
              <div
                className="image"
                style={{ backgroundImage: `url(/images/commercial_aboutus.jpeg)` }}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
