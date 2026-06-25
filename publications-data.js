// Generated from publications.json so the page also works when opened as file:// in Firefox.
window.PUBLICATIONS = [
  {
    "id": "p16",
    "number": 16,
    "collapseId": "ieeesp26",
    "authorsHtml": "<u>Yigitcan Kaya</u>, Anton Landerer, Stijn Pletinckx, Michelle Zimmermann, Christopher Kruegel, Giovanni Vigna:",
    "title": "When AI Meets the Web: Prompt Injection Risks in Third-Party AI Chatbot Plugins",
    "titleUrl": "https://arxiv.org/abs/2511.05797",
    "venueHtml": "(IEEE Symposium on Security and Privacy (S&P)'26)",
    "links": [],
    "abstract": "Prompt injection attacks pose a critical threat to large language models (LLMs), with prior work focusing on cutting-edge LLM applications like personal copilots. In contrast, simpler LLM applications, such as customer service chatbots, are widespread on the web, yet their security posture and exposure to such attacks remain poorly understood. These applications often rely on third-party chatbot plugins that act as intermediaries to commercial LLM APIs, offering non-expert website builders intuitive ways to customize chatbot behaviors. To bridge this gap, we present the first large-scale study of 17 third-party chatbot plugins used by over 10,000 public websites, uncovering previously unknown prompt injection risks in practice. First, 8 of these plugins (used by 8,000 websites) fail to enforce the integrity of the conversation history transmitted in network requests between the website visitor and the chatbot. This oversight amplifies the impact of direct prompt injection attacks by allowing adversaries to forge conversation histories (including fake system messages), boosting their ability to elicit unintended behavior (e.g., code generation) by 3\u20138x. Second, 15 plugins offer tools, such as web-scraping, to enrich the chatbot's context with website-specific content. However, these tools do not distinguish the website's trusted content (e.g., product descriptions) from untrusted, third-party content (e.g., customer reviews), introducing a risk of indirect prompt injection. Notably, we found that ~13% of e-commerce websites have already exposed their chatbots to third-party content. We systematically evaluate both vulnerabilities through controlled experiments grounded in real-world observations, focusing on factors such as system prompt design and the underlying LLM. Our findings show that many plugins adopt insecure practices that undermine the built-in LLM safeguards."
  },
  {
    "id": "p15",
    "number": 15,
    "collapseId": "naacl25",
    "authorsHtml": "Michael-Andrei Panaitescu-Liess, Pankayaraj Pathmanathan, <u>Yigitcan Kaya</u>, Zora Che, Bang An, Sicheng Zhu, Aakriti Agrawal, Furong Huang:",
    "title": "PoisonedParrot: Subtle Data Poisoning Attacks to Elicit Copyright-Infringing Content from Large Language Models",
    "titleUrl": "https://arxiv.org/abs/2503.07697",
    "venueHtml": "(NAACL'25 Main Conference, Oral Presentation)",
    "links": [],
    "abstract": "As the capabilities of large language models (LLMs) continue to expand, their usage has become increasingly prevalent. However, as reflected in numerous ongoing lawsuits regarding LLM-generated content, addressing copyright infringement remains a significant challenge. In this paper, we introduce PoisonedParrot: the first stealthy data poisoning attack that induces an LLM to generate copyrighted content even when the model has not been directly trained on the specific copyrighted material. PoisonedParrot integrates small fragments of copyrighted text into the poison samples using an off-the-shelf LLM. Despite its simplicity, evaluated in a wide range of experiments, PoisonedParrot is surprisingly effective at priming the model to generate copyrighted content with no discernible side effects. Moreover, we discover that existing defenses are largely ineffective against our attack. Finally, we make the first attempt at mitigating copyright-infringement poisoning attacks by proposing a defense: ParrotTrap. We encourage the community to explore this emerging threat model further."
  },
  {
    "id": "p14",
    "number": 14,
    "collapseId": "satml25",
    "authorsHtml": "<u>Yigitcan Kaya</u>, Yizheng Chen, Marcus Botacin, Shoumik Saha, Fabio Pierazzi, Lorenzo Cavallaro, David Wagner, Tudor Dumitras:",
    "title": "ML-Based Behavioral Malware Detection Is Far From a Solved Problem",
    "titleUrl": "https://arxiv.org/abs/2405.06124",
    "venueHtml": "(SaTML'25)",
    "links": [
      {
        "label": "Project Website",
        "url": "https://malwaredetectioninthewild.github.io/"
      }
    ],
    "abstract": "Malware detection is a ubiquitous application of Machine Learning (ML) in security. In behavioral malware analysis, the detector relies on features extracted from program execution traces. The research literature has focused on detectors trained with features collected from sandbox environments and evaluated on samples also analyzed in a sandbox. However, in deployment, a malware detector at endpoint hosts often must rely on traces captured from endpoint hosts, not from a sandbox. Thus, there is a gap between the literature and real-world needs. We present the first measurement study of the performance of ML-based malware detectors at real-world endpoints. Leveraging a dataset of sandbox traces and a dataset of in-the-wild program traces, we evaluate two scenarios: (i) an endpoint detector trained on sandbox traces (convenient and easy to train), and (ii) an endpoint detector trained on endpoint traces (more challenging to train, since we need to collect telemetry data). We discover a wide gap between the performance as measured using prior evaluation methods in the literature\u2014over 90%\u2014vs. expected performance in endpoint detection\u2014about 20% (scenario (i)) to 50% (scenario (ii)). We characterize the ML challenges that arise in this domain and contribute to this gap, including label noise, distribution shift, and spurious features. Moreover, we show several techniques that achieve 5\u201330% relative performance improvements over the baselines. Our evidence suggests that applying detectors trained on sandbox data to endpoint detection is challenging. The most promising direction is training detectors directly on endpoint data, which marks a departure from current practice. To promote progress, we will facilitate researchers to perform realistic detector evaluations against our real-world dataset."
  },
  {
    "id": "p13",
    "number": 13,
    "collapseId": "iclrgroup",
    "authorsHtml": "Michael-Andrei Panaitescu-Liess*, <u>Yigitcan Kaya*</u>, Sicheng Zhu, Furong Huang, Tudor Dumitras:",
    "title": "Like Oil and Water: Group Robustness Methods and Poisoning Defenses Don't Mix",
    "titleUrl": "https://arxiv.org/abs/2504.02142",
    "venueHtml": "(ICLR'24 - * indicates equal contribution)",
    "links": [],
    "abstract": "Group robustness has become a major concern in machine learning (ML) as conventional training paradigms were found to produce high error on minority groups. Without explicit group annotations, proposed solutions rely on heuristics that aim to identify and then amplify the minority samples during training. In our work, we first uncover a critical shortcoming of these methods: an inability to distinguish legitimate minority samples from poison samples in the training set. By amplifying poison samples as well, group robustness methods inadvertently boost the success rate of an adversary---e.g., from 0% without amplification to over 97% with it. Notably, we supplement our empirical evidence with an impossibility result proving this inability of a standard heuristic under some assumptions. Moreover, scrutinizing recent poisoning defenses both in centralized and federated learning, we observe that they rely on similar heuristics to identify which samples should be eliminated as poisons. In consequence, minority samples are eliminated along with poisons, which damages group robustness---e.g., from 55% without the removal of the minority samples to 41% with it. Finally, as they pursue opposing goals using similar heuristics, our attempt to alleviate the trade-off by combining group robustness methods and poisoning defenses falls short. By exposing this tension, we also hope to highlight how benchmark-driven ML scholarship can obscure the trade-offs among different metrics with potentially detrimental consequences."
  },
  {
    "id": "p12",
    "number": 12,
    "collapseId": "iclrmalware",
    "authorsHtml": "Shoumik Saha, Wenxiao Wang, <u>Yigitcan Kaya</u>, Soheil Feizi, Tudor Dumitras:",
    "title": "DRSM: De-Randomized Smoothing on Malware Classifier Providing Certified Robustness",
    "titleUrl": "https://arxiv.org/abs/2303.13372",
    "venueHtml": "(ICLR'24)",
    "links": [],
    "abstract": "Machine Learning (ML) models have been utilized for malware detection for over two decades. Consequently, this ignited an ongoing arms race between malware authors and antivirus systems, compelling researchers to propose defenses for malware-detection models against evasion attacks. However, most if not all existing defenses against evasion attacks suffer from sizable performance degradation and/or can defend against only specific attacks, which makes them less practical in real-world settings. In this work, we develop a certified defense, DRSM (De-Randomized Smoothed MalConv), by redesigning the de-randomized smoothing technique for the domain of malware detection. Specifically, we propose a window ablation scheme to provably limit the impact of adversarial bytes while maximally preserving local structures of the executables. After showing how DRSM is theoretically robust against attacks with contiguous adversarial bytes, we verify its performance and certified robustness experimentally, where we observe only marginal accuracy drops as the cost of robustness. To our knowledge, we are the first to offer certified robustness in the realm of static detection of malware executables. More surprisingly, through evaluating DRSM against empirical attacks of different types, we observe that the proposed defense is empirically robust to some extent against a diverse set of attacks, some of which even fall out of the scope of its original threat model. In addition, we collected recent benign raw executables from diverse sources, which will be made public as a dataset called PACE (Publicly Accessible Collection(s) of Executables) to alleviate the scarcity of publicly available benign datasets for studying malware detection and provide future research with more representative data of the time."
  },
  {
    "id": "p11",
    "number": 11,
    "collapseId": "satmlslow",
    "authorsHtml": "Kamala Varma, Arda Numano\u011flu, <u>Yigitcan Kaya</u>, Tudor Dumitras:",
    "title": "Understanding, Uncovering, and Mitigating the Causes of Inference Slowdown for Language Models",
    "titleUrl": "https://ieeexplore.ieee.org/document/10516651",
    "venueHtml": "(SaTML'24)",
    "links": [],
    "abstract": "Dynamic neural networks (DyNNs) have shown promise for alleviating the high computational costs of pre-trained language models (PLMs), such as BERT and GPT. Emerging slowdown attacks have shown to inhibit the ability of DyNNs to omit computation, e.g., by skipping layers that are deemed unnecessary. As a result, these attacks can cause significant delays in inference speed for DyNNs and may erase their cost savings altogether. Most research in slowdown attacks has been in the image domain, despite the ever-growing computational costs---and relevance of DyNNs---in the language domain. Unfortunately, it is still not understood what language artifacts trigger extra processing in a PLM, or what causes this behavior. We aim to fill this gap through an empirical exploration of the slowdown effect on language models. Specifically, we uncover a crucial difference between the slowdown effect in the image and language domains, illuminate the efficacy of pre-existing and novel techniques for causing slowdown, and report circumstances where slowdown does not occur. Building on these observations, we propose the first approach for mitigating the slowdown effect. Our results suggest that slowdown attacks can provide new insights that can inform the development of more efficient PLMs."
  },
  {
    "id": "p10",
    "number": 10,
    "collapseId": "icmlsia",
    "authorsHtml": "<u>Yigitcan Kaya</u>, Bilal Zafar, Sergul Aydore, Nathalie Rauschmayr, Krishnaram Kenthapadi:",
    "title": "Generating Distributional Adversarial Examples to Evade Statistical Detectors",
    "titleUrl": "https://proceedings.mlr.press/v162/kaya22a.html",
    "venueHtml": "(ICML'22)",
    "links": [],
    "abstract": "Deep neural networks (DNNs) are known to be highly vulnerable to adversarial examples (AEs) that include malicious perturbations. Assumptions about the statistical differences between natural and adversarial inputs are commonplace in many detection techniques. As a best practice, AE detectors are evaluated against 'adaptive' attackers who actively perturb their inputs to avoid detection. Due to the difficulties in designing adaptive attacks, however, recent work suggests that most detectors have incomplete evaluation. We aim to fill this gap by designing a generic adaptive attack against detectors: the 'statistical indistinguishability attack' (SIA). The SIA optimizes a novel objective to craft adversarial examples (AEs) that follow the same distribution as the natural inputs with respect to DNN representations. Our objective targets all DNN layers simultaneously as we show that AEs being indistinguishable at one layer might fail to be so at other layers. The SIA is formulated around evading distributional detectors that inspect a set of AEs as a whole and is also effective against four individual AE detectors, two dataset shift detectors, and an out-of-distribution sample detector, curated from published works. This suggests that the SIA can be a reliable tool for evaluating the security of a range of detectors."
  },
  {
    "id": "p9",
    "number": 9,
    "collapseId": "nips",
    "authorsHtml": "Sanghyun Hong, Michael-Andrei Panaitescu-Liess, <u>Yigitcan Kaya</u>, Tudor Dumitras:",
    "title": "Qu-ANTI-zation: Exploiting Quantization Artifacts for Achieving Adversarial Outcomes",
    "titleUrl": "https://proceedings.neurips.cc/paper/2021/hash/4d8bd3f7351f4fee76ba17594f070ddd-Abstract.html",
    "venueHtml": "(NeurIPS'21)",
    "links": [],
    "abstract": "Quantization is a popular technique that transforms the parameter representation of a neural network from floating-point numbers into lower-precision ones (e.g., 8-bit integers). It reduces the memory footprint and the computational cost at inference, facilitating the deployment of resource-hungry models. However, the parameter perturbations caused by this transformation result in behavioral disparities between the model before and after quantization. For example, a quantized model can misclassify some test-time samples that are otherwise classified correctly. It is not known whether such differences lead to a new security vulnerability. We hypothesize that an adversary may control this disparity to introduce specific behaviors that activate upon quantization. To study this hypothesis, we weaponize quantization-aware training and propose a new training framework to implement adversarial quantization outcomes. Following this framework, we present three attacks we carry out with quantization: (i) an indiscriminate attack for significant accuracy loss; (ii) a targeted attack against specific samples; and (iii) a backdoor attack for controlling model with an input trigger. We further show that a single compromised model defeats multiple quantization schemes, including robust quantization techniques. Moreover, in a federated learning scenario, we demonstrate that a set of malicious participants who conspire can inject our quantization-activated backdoor. Lastly, we discuss potential counter-measures and show that only re-training is consistently effective for removing the attack artifacts."
  },
  {
    "id": "p8",
    "number": 8,
    "collapseId": "regularization_mias",
    "authorsHtml": "<u>Yigitcan Kaya</u>, Tudor Dumitras:",
    "title": "When Does Data Augmentation Help With Membership Inference Attacks?",
    "titleUrl": "http://proceedings.mlr.press/v139/kaya21a.html",
    "venueHtml": "(ICML'21)",
    "links": [],
    "abstract": "Deep learning models often raise privacy concerns as they leak information about their training data. This leakage enables membership inference attacks (MIA) that can identify whether a data point was in a model's training set. Research shows that some 'data augmentation' mechanisms may reduce the risk by combatting a key factor increasing the leakage, overfitting. While many mechanisms exist, their effectiveness against MIAs and privacy properties have not been studied systematically. Employing two recent MIAs, we explore the lower bound on the risk in the absence of formal upper bounds. First, we evaluate 7 mechanisms and differential privacy, on three image classification tasks. We find that applying augmentation to increase the model's utility does not mitigate the risk and protection comes with a utility penalty. Further, we also investigate why popular label smoothing mechanism consistently amplifies the risk. Finally, we propose 'loss-rank-correlation' (LRC) metric to assess how similar the effects of different mechanisms are. This, for example, reveals the similarity of applying high-intensity augmentation against MIAs to simply reducing the training time. Our findings emphasize the utility-privacy trade-off and provide practical guidelines on using augmentation to manage the trade-off."
  },
  {
    "id": "p7",
    "number": 7,
    "collapseId": "deepsloth",
    "authorsHtml": "Sanghyun Hong*, <u>Yigitcan Kaya*</u>, Ionu\u0163-Vlad Modoranu, Tudor Dumitra\u015f:",
    "title": "A Panda? No, It's a Sloth: Slowdown Attacks on Adaptive Multi-Exit Neural Network Inference",
    "titleUrl": "https://arxiv.org/abs/2010.02432",
    "venueHtml": "(ICLR'21 Spotlight Presentation - * indicates equal contribution)",
    "links": [
      {
        "label": "MIT Technology Review Coverage",
        "url": "https://www.technologyreview.com/2021/05/06/1024654/ai-energy-hack-adversarial-attack/"
      },
      {
        "label": "DevNews Podcast Chat",
        "url": "https://dev.to/devteam/apple-s-airtag-security-concerns-a-deep-neural-network-hack-more-on-devnews-30gm"
      }
    ],
    "abstract": "Recent increases in the computational demands of deep neural networks (DNNs), combined with the observation that most input samples require only simple models, have sparked interest in input-adaptive multi-exit architectures, such as MSDNets or Shallow-Deep Networks. These architectures enable faster inferences and could bring DNNs to low-power devices, e.g. in the Internet of Things (IoT). However, it is unknown if the computational savings provided by this approach are robust against adversarial pressure. In particular, an adversary may aim to slow down adaptive DNNs by increasing their average inference time-a threat analogous to the denial-of-service attacks from the Internet. In this paper, we conduct a systematic evaluation of this threat by experimenting with three generic multi-exit DNNs (based on VGG16, MobileNet, and ResNet56) and a custom multi-exit architecture, on two popular image classification benchmarks (CIFAR-10 and Tiny ImageNet). To this end, we show that adversarial sample-crafting techniques can be modified to cause slowdown, and we propose a metric for comparing their impact on different architectures. We show that a slowdown attack reduces the efficacy of multi-exit DNNs by 90%-100%, and it amplifies the latency by 1.5-5x in a typical IoT deployment. We also show that it is possible to craft universal, reusable perturbations and that the attack can be effective in realistic black-box scenarios, where the attacker has limited knowledge about the victim. Finally, we show that adversarial training provides limited protection against slowdowns. These results suggest that further research is needed for defending multi-exit architectures against this emerging threat."
  },
  {
    "id": "p6",
    "number": 6,
    "collapseId": "grashaping",
    "authorsHtml": "Sanghyun Hong, Varun Chandrasekaran, <u>Yigitcan Kaya</u>, Tudor Dumitras, Nicolas Papernot",
    "title": "On the Effectiveness of Mitigating Data Poisoning Attacks with Gradient Shaping",
    "titleUrl": "https://arxiv.org/abs/2002.11497",
    "venueHtml": "(Pre-print)",
    "links": [],
    "abstract": "Machine learning algorithms are vulnerable to data poisoning attacks. Prior taxonomies that focus on specific scenarios, e.g., indiscriminate or targeted, have enabled defenses for the corresponding subset of known attacks. Yet, this introduces an inevitable arms race between adversaries and defenders. In this work, we study the feasibility of an attack-agnostic defense relying on artifacts that are common to all poisoning attacks. Specifically, we focus on a common element between all attacks: they modify gradients computed to train the model. We identify two main artifacts of gradients computed in the presence of poison: (1) their ell2 norms have significantly higher magnitudes than those of clean gradients, and (2) their orientation differs from clean gradients. Based on these observations, we propose the prerequisite for a generic poisoning defense: it must bound gradient magnitudes and minimize differences in orientation. We call this gradient shaping. As an exemplar tool to evaluate the feasibility of gradient shaping, we use differentially private stochastic gradient descent (DP-SGD), which clips and perturbs individual gradients during training to obtain privacy guarantees. We find that DP-SGD, even in configurations that do not result in meaningful privacy guarantees, increases the model's robustness to indiscriminate attacks. It also mitigates worst-case targeted attacks and increases the adversary's cost in multi-poison scenarios. The only attack we find DP-SGD to be ineffective against is a strong, yet unrealistic, indiscriminate attack. Our results suggest that, while we currently lack a generic poisoning defense, gradient shaping is a promising direction for future research."
  },
  {
    "id": "p5",
    "number": 5,
    "collapseId": "iclr",
    "authorsHtml": "Sanghyun Hong, Michael Davinroy, <u>Yigitcan Kaya</u>, Dana Dachman-Soled, Tudor Dumitras:",
    "title": "How to 0wn the NAS in Your Spare Time",
    "titleUrl": "https://arxiv.org/abs/2002.06776",
    "venueHtml": "(ICLR'20)",
    "links": [],
    "abstract": "New data processing pipelines and unique network architectures increasingly drive the success of deep learning. In consequence, the industry considers top-performing architectures as intellectual property and devotes considerable computational resources to discovering such architectures through neural architecture search (NAS). This provides an incentive for adversaries to steal these unique architectures; when used in the cloud, to provide Machine Learning as a Service (MLaaS), the adversaries also have an opportunity to reconstruct the architectures by exploiting a range of hardware side-channels. However, it is challenging to reconstruct unique architectures and pipelines without knowing the computational graph (e.g., the layers, branches or skip connections), the architectural parameters (e.g., the number of filters in a convolutional layer) or the specific pre-processing steps (e.g. embeddings). In this paper, we design an algorithm that reconstructs the key components of a unique deep learning system by exploiting a small amount of information leakage from a cache side-channel attack, Flush+Reload. We use Flush+Reload to infer the trace of computations and the timing for each computation. Our algorithm then generates candidate computational graphs from the trace and eliminates incompatible candidates through a parameter estimation process. We implement our algorithm on PyTorch and Tensorflow. We demonstrate experimentally that we can reconstruct MalConv, a novel data pre-processing pipeline for malware detection, and ProxylessNAS-CPU, a novel network architecture for the ImageNet classification optimized to run on CPUs, without knowing the architecture family. In both cases, we achieve 0% error. These results suggest hardware side channels are a practical attack vector against MLaaS, and more efforts should be devoted to understanding their impact on the security of deep learning systems."
  },
  {
    "id": "p4",
    "number": 4,
    "collapseId": "terminal",
    "authorsHtml": "Sanghyun Hong, Pietro Frigo, <u>Yigitcan Kaya</u>, Cristiano Giuffrida, Tudor Dumitras:",
    "title": "Terminal Brain Damage: Exposing the Graceless Degradation in Deep Neural Networks Under Hardware Fault Attacks",
    "titleUrl": "https://arxiv.org/abs/1906.01017",
    "venueHtml": "(USENIX Security Symposium'19)",
    "links": [],
    "abstract": "Deep neural networks (DNNs) have been shown to tolerate \"brain damage\": cumulative changes to the network's parameters (e.g., pruning, numerical perturbations) typically result in a graceful degradation of classification accuracy. However, the limits of this natural resilience are not well understood in the presence of small adversarial changes to the DNN parameters' underlying memory representation, such as bit-flips that may be induced by hardware fault attacks. We study the effects of bitwise corruptions on 19 DNN models---six architectures on three image classification tasks---and we show that most models have at least one parameter that, after a specific bit-flip in their bitwise representation, causes an accuracy loss of over 90%. We employ simple heuristics to efficiently identify the parameters likely to be vulnerable. We estimate that 40-50% of the parameters in a model might lead to an accuracy drop greater than 10% when individually subjected to such single-bit perturbations. To demonstrate how an adversary could take advantage of this vulnerability, we study the impact of an exemplary hardware fault attack, Rowhammer, on DNNs. Specifically, we show that a Rowhammer enabled attacker co-located in the same physical machine can inflict significant accuracy drops (up to 99%) even with single bit-flip corruptions and no knowledge of the model. Our results expose the limits of DNNs' resilience against parameter perturbations induced by real-world fault attacks. We conclude by discussing possible mitigations and future research directions towards fault attack-resilient DNNs."
  },
  {
    "id": "p3",
    "number": 3,
    "collapseId": "overthinking",
    "authorsHtml": "<u>Yigitcan Kaya</u>, Sanghyun Hong, Tudor Dumitras:",
    "title": "Shallow-Deep Networks: Understanding and Mitigating Network Overthinking",
    "titleUrl": "https://arxiv.org/abs/1810.07052",
    "venueHtml": "(ICML'19)",
    "links": [],
    "abstract": "We characterize a prevalent weakness of deep neural networks (DNNs)\u2014overthinking\u2014which occurs when a network can reach correct predictions before its final layer. Overthinking is computationally wasteful, and it can also be destructive when, by the final layer, the correct prediction changes into a misclassification. Understanding overthinking requires studying how each prediction evolves during a network\u2019s forward pass, which conventionally is opaque. For prediction transparency, we propose the Shallow-Deep Network (SDN), a generic modification to off-the-shelf DNNs that introduces internal classifiers. We apply SDN to four modern architectures, trained on three image classification tasks, to characterize the overthinking problem. We show that SDNs can mitigate the wasteful effect of overthinking with confidence-based early exits, which reduce the average inference cost by more than 50% and preserve the accuracy. We also find that the destructive effect occurs for 50% of misclassifications on natural inputs and that it can be induced, adversarially, with a recent backdooring attack. To mitigate this effect, we propose a new confusion metric to quantify the internal disagreements that will likely lead to misclassifications."
  },
  {
    "id": "p2",
    "number": 2,
    "collapseId": "usenix",
    "authorsHtml": "Octavian Suciu, Radu Marginean, <u>Yigitcan Kaya</u>, Hal Daum\u00e9 III, Tudor Dumitras:",
    "title": "When Does Machine Learning FAIL? Generalized Transferability for Evasion and Poisoning Attacks",
    "titleUrl": "https://www.usenix.org/conference/usenixsecurity18/presentation/suciu",
    "venueHtml": "(USENIX Security Symposium'18)",
    "links": [],
    "abstract": "Recent results suggest that attacks against supervised machine learning systems are quite effective, while defenses are easily bypassed by new attacks. However, the specifications for machine learning systems currently lack precise adversary definitions, and the existing attacks make diverse, potentially unrealistic assumptions about the strength of the adversary who launches them. We propose the FAIL attacker model, which describes the adversary's knowledge and control along four dimensions. Our model allows us to consider a wide range of weaker adversaries who have limited control and incomplete knowledge of the features, learning algorithms and training instances utilized. To evaluate the utility of the FAIL model, we consider the problem of conducting targeted poisoning attacks in a realistic setting: the crafted poison samples must have clean labels, must be individually and collectively inconspicuous, and must exhibit a generalized form of transferability, defined by the FAIL model. By taking these constraints into account, we design StingRay, a targeted poisoning attack that is practical against 4 machine learning applications, which use 3 different learning algorithms, and can bypass 2 existing defenses. Conversely, we show that a prior evasion attack is less effective under generalized transferability. Such attack evaluations, under the FAIL adversary model, may also suggest promising directions for future defenses."
  },
  {
    "id": "p1",
    "number": 1,
    "collapseId": "spw",
    "authorsHtml": "Tudor Dumitras, <u>Yigitcan Kaya</u>, Radu Marginean and Octavian Suciu:",
    "title": "Too Big to FAIL: What You Need to Know Before Attacking a Machine Learning System",
    "titleUrl": null,
    "venueHtml": "(International Workshop on Security Protocols'18)",
    "links": [],
    "abstract": "There is an emerging arms race in the field of adversarial machine learning (AML). Recent results suggest that machine learning (ML) systems are vulnerable to a wide range of attacks; meanwhile, there are no systematic defenses. In this position paper we argue that to make progress toward such defenses, the specifications for machine learning systems must include precise adversary definitions\u2014a key requirement in other fields, such as cryptography or network security. Without common adversary definitions, new AML attacks risk making strong and unrealistic assumptions about the adversary\u2019s capabilities. Furthermore, new AML defenses are evaluated based on their robustness against adversarial samples generated by a specific attack algorithm, rather than by a general class of adversaries. We propose the FAIL adversary model, which describes the adversary\u2019s knowledge and control along four dimensions: data Features, learning Algorithms, training Instances and crafting Leverage. We analyze several common assumptions often implicit, from the AML literature, and we argue that the FAIL model can represent and generalize the adversaries considered in these references. The FAIL model allows us to consider a range of adversarial capabilities and enables systematic comparisons of attacks against ML systems, providing a clearer picture of the security threats that these attacks raise. By evaluating how much a new AML attack\u2019s success depends on the strength of the adversary along each of the FAIL dimensions, researchers will be able to reason about the real effectiveness of the attack. Additionally, such evaluations may suggest promising directions for investigating defenses against the ML threats."
  }
];
