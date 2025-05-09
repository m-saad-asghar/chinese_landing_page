"use client";

import React from "react";

const WhoWeAre = () => {
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="who-we-are ptb-80 bg-f6f6f6" id="services">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
            全面的房地产法律服务
            </h2>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>房地产交易与家族办公室法律顾问服务</h4>
                <p>
                我们为房地产的购买、销售、租赁及开发提供全程法律支持。从合同谈判到尽职调查，我们的团队确保每一步法律流程都能保护您的权益与投资。
                </p>
                <span>1</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>投资结构设计与资产保护</h4>
                <p>
                我们的律师协助家庭及投资者建立稳健的法律架构，以保障房地产所有权并确保全面符合法规要求，构建安全可持续的投资体系。
                </p>
                <span>2</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>开发商与物业管理公司法律顾问服务</h4>
                <p>
                我们代表开发商及房地产管理公司处理合同起草、争议解决及许可办理等法律事务，确保项目顺利执行并全面符合法律规定。
                </p>
                <span>3</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>房地产买卖、文件处理与过户服务</h4>
                <p>
                我们全程管理房地产交易的各个环节，包括起草与审查买卖协议（Form F）、监督产权注册流程，并办理过户手续，确保交易顺利进行并全面保障您的合法权益。
                </p>
                <span>4</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>房地产交易法律代理</h4>
                <p>
                凭借正式的授权委托书，我们可全程代表您办理房地产交易，在您授权下完成所有流程，既保障您的权益，又确保交易合法合规。
                </p>
                <span>5</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>项目延期与赔偿索赔</h4>
                <p>
                若开发商延迟交付项目，我们将为您提供全方位法律代理服务，主张赔偿权益。我们负责协商与法律诉讼，帮助您追回应得款项，最大限度降低损失。
                </p>
                <span>6</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>租赁与产权纠纷解决</h4>
                <p>
                我们代理客户处理租赁纠纷、共有物业争议、项目取消及延迟交房等问题，提供定制化的协商或诉讼方案，全力保护您的房地产权益。
                </p>
                <span>7</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>房地产监护服务</h4>
                <p>
                我们的法律团队为未成年人或有特殊需求人士名下的房地产提供管理支持，确保符合法律规定的资产管理流程，保障受益人的权益，并维护资产的长期延续性。
                </p>
                <span>8</span>
              </div>
            </div>

          </div>
        </div>

        <div style={{display: "flex",
    justifyContent: "center",
    marginTop: 20}}>
        <button
  onClick={scrollToHomePage}
  style={{
    backgroundColor: "#dab35c",
    color: "#ffffff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  }}
>
现在就预约法律咨询！
</button>
        </div>
      </section>

      <section className="who-we-are pt-80 bg-f6f6f6">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
            助力可持续发展的企业法律服务
            </h2>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>公司注册与营业执照办理</h4>
                <p>
                我们为您在阿联酋设立公司提供全方位法律支持，高效透明地完成所有监管手续，确保您的企业从一开始就拥有稳固的法律基础。
                </p>
                <span>1</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>公司治理与合规服务</h4>
                <p>
                我们的顾问团队为您量身设计治理架构，并开展合规审计，助力企业实现可持续发展与风险控制。我们协助您在法律责任与运营效率之间实现最佳平衡。
                </p>
                <span>2</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>企业重组与清算</h4>
                <p>
                无论您正面临财务挑战还是进行战略调整，我们的团队都能提供重组、破产及清算的法律解决方案，确保企业在符合法律规定的前提下实现有序转型与持续运营。
                </p>
                <span>3</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>并购交易（M&A）</h4>
                <p>
                我们在并购全过程中为您提供法律支持——从估值、谈判到交易执行，提供战略性法律把控，助您在每一笔交易中实现价值最大化并有效规避风险。
                </p>
                <span>4</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>商标与知识产权保护</h4>
                <p>
                我们协助办理商标注册、知识产权维权，并执行创新成果的法律保护。我们的法律服务致力于保护您的品牌、专利及市场竞争优势。
                </p>
                <span>5</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>合同起草与审查</h4>
                <p>
                我们的法律团队为您制定严谨规范的合同文本，全面保障您的商业利益。我们确保每一条款法律清晰，最大限度降低未来争议的可能性。
                </p>
                <span>6</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>机构仲裁与争议解决</h4>
                <p>
                我们代表您的企业通过机构仲裁及其他替代性争议解决方式处理复杂纠纷，在实现高效法律结果的同时，维护商业关系与企业声誉。
                </p>
                <span>7</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>继承规划与家族企业架构设计</h4>
                <p>
                我们为家族企业提供资产传承与所有权安排的战略法律框架，确保合规性、企业稳定性以及长期财富传承的法律保障。
                </p>
                <span>8</span>
              </div>
            </div>

          </div>
        </div>

        <div style={{display: "flex",
    justifyContent: "center",
    marginTop: 20}}>
        <button
  onClick={scrollToHomePage}
  style={{
    backgroundColor: "#dab35c",
    color: "#ffffff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  }}
>
立即预约法律咨询！
</button>
        </div>
      </section>
      <section className="who-we-are pt-80 bg-f6f6f6">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
            保障企业权益的商业与金融法律服务
            </h2>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>金融合规与反洗钱（AML）</h4>
                <p>
                我们协助您建立稳健的法律合规体系，满足监管标准，保护企业声誉。我们的法律框架有助于降低法律风险、强化合规执行，并推动可持续的公司治理。
                </p>
                <span>1</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>税务咨询与财务报告</h4>
                <p>
                我们的专家为增值税、企业所得税及财务报告提供切实可行的解决方案，确保透明、准确并全面符合法规，助力企业做出稳健的财务决策。
                </p>
                <span>2</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>债务追偿与支票执行</h4>
                <p>
                我们代表您的企业追回未结付款项并执行退票支票，通过协商或法律诉讼，确保快速、合法地回收债务，维护您的财务权益。
                </p>
                <span>3</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>债务重组与商业破产</h4>
                <p>
                我们的法律团队为应对财务困境提供战略指导。无论是与债权人谈判还是处理正式的破产程序，我们都致力于帮助您恢复财务平衡，保障企业的持续运营。
                </p>
                <span>4</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>商业纠纷与诉讼</h4>
                <p>
                我们代理客户处理商业合同纠纷及财务索赔案件，涵盖法院诉讼与仲裁程序，专注于实现有利的法律结果，同时最大限度降低法律风险与经济损失。
                </p>
                <span>5</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>海事与国际贸易法律顾问</h4>
                <p>
                我们在跨境航运、货物索赔及保险合同等领域提供专业法律支持，确保在全球贸易中符合法规，全面保障您的商业利益。
                </p>
                <span>6</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>石油与天然气法律顾问服务</h4>
                <p>
                我们为能源行业提供专业法律服务，涵盖合同起草、法规合规及争议解决，协助您在这一关键领域中保障运营安全与投资利益。
                </p>
                <span>7</span>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <h4>商业交易托管服务</h4>
                <p>
                我们提供安全、中立的托管服务，管理商业、房地产及投资交易中的付款流程，确保合同履约、资金安全，并保障各方交易透明。
                </p>
                <span>8</span>
              </div>
            </div>

          </div>
        </div>

        <div style={{display: "flex",
    justifyContent: "center",
    marginTop: 20}}>
        <button
  onClick={scrollToHomePage}
  style={{
    backgroundColor: "#dab35c",
    color: "#ffffff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  }}
>
立即预约法律咨询！
</button>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
