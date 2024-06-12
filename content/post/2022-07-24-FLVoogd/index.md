---
title: FLVoogd - Robust And Privacy Preserving Federated Learning
summary: 14th Asian Conference on Machine Learning
date: 2022-07-24

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com)'

authors:
  - admin
  - Wang Rui
  - Qiao Yanqi
  - Panaousis Emmanouil
  - Liang Kaitai

tags:
  - federated learning
  - secure-multi-party computation
  - differential privacy
---

## Abstract

In this work, we propose FLVoogd, an updated federated learning method in which servers and clients collaboratively eliminate Byzantine attacks while preserving privacy. In particular, servers use automatic Density-based Spatial Clustering of Applications with Noise (DBSCAN) combined with S2PC to cluster the benign majority without acquiring sensitive personal information. Meanwhile, clients build dual models and perform test-based distance controlling to adjust their local models toward the global one to achieve personalizing. Our framework is automatic and adaptive that servers/clients don't need to tune the parameters during the training. In addition, our framework leverages Secure Multi-party Computation (SMPC) operations, including multiplications, additions, and comparison, where costly operations, like division and square root, are not required. Evaluations are carried out on some conventional datasets from the image classification field. The result shows that FLVoogd can effectively reject malicious uploads in most scenarios; meanwhile, it avoids data leakage from the server-side.

### links

👉 [Link to the full paper (published version)](https://proceedings.mlr.press/v189/yuhang23a.html)

👉 [Link to the full paper (archived version)](https://repository.tudelft.nl/islandora/object/uuid%3A7d7f279c-61b9-4739-b03c-637f065d460d?collection=education)

📚 [Link to CRYPTAI LAB to see more works](https://sites.google.com/view/kaitailiang/home/cryptai-lab)

### Citation

```bibtex
@InProceedings{pmlr-v189-yuhang23a,
    title={FLVoogd: Robust And Privacy Preserving Federated Learning},
    author={Yuhang, Tian and Rui, Wang and Yanqi, Qiao and Emmanouil, Panaousis and Kaitai, Liang},
    booktitle={Proceedings of The 14th Asian Conference on Machine Learning},
    pages={1022--1037},
    year={2023},
    editor={Khan, Emtiyaz and Gonen, Mehmet},
    volume={189},
    series={Proceedings of Machine Learning Research},
    month={12--14 Dec},
    publisher={PMLR},
    pdf={https://proceedings.mlr.press/v189/yuhang23a/yuhang23a.pdf},
    url={https://proceedings.mlr.press/v189/yuhang23a.html},
}
```

## Did you find this page helpful? Consider sharing it 🙌
