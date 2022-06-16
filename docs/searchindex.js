Search.setIndex({docnames:["README","aijack","aijack.attack","aijack.attack.evasion","aijack.attack.inversion","aijack.attack.inversion.utils","aijack.attack.labelleakage","aijack.attack.membership","aijack.attack.poison","aijack.collaborative","aijack.collaborative.core","aijack.collaborative.dsfl","aijack.collaborative.fedavg","aijack.collaborative.fedgems","aijack.collaborative.fedkd","aijack.collaborative.fedmd","aijack.collaborative.fedprox","aijack.collaborative.optimizer","aijack.collaborative.secureboost","aijack.collaborative.secureboost.wrapper","aijack.collaborative.splitnn","aijack.defense","aijack.defense.ckks","aijack.defense.dp","aijack.defense.dp.manager","aijack.defense.mid","aijack.defense.setoria","aijack.defense.soteria","aijack.manager","aijack.utils","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["README.rst","aijack.rst","aijack.attack.rst","aijack.attack.evasion.rst","aijack.attack.inversion.rst","aijack.attack.inversion.utils.rst","aijack.attack.labelleakage.rst","aijack.attack.membership.rst","aijack.attack.poison.rst","aijack.collaborative.rst","aijack.collaborative.core.rst","aijack.collaborative.dsfl.rst","aijack.collaborative.fedavg.rst","aijack.collaborative.fedgems.rst","aijack.collaborative.fedkd.rst","aijack.collaborative.fedmd.rst","aijack.collaborative.fedprox.rst","aijack.collaborative.optimizer.rst","aijack.collaborative.secureboost.rst","aijack.collaborative.secureboost.wrapper.rst","aijack.collaborative.splitnn.rst","aijack.defense.rst","aijack.defense.ckks.rst","aijack.defense.dp.rst","aijack.defense.dp.manager.rst","aijack.defense.mid.rst","aijack.defense.setoria.rst","aijack.defense.soteria.rst","aijack.manager.rst","aijack.utils.rst","index.rst","modules.rst"],objects:{"":[[1,0,0,"-","aijack"]],"aijack.attack":[[2,0,0,"-","base_attack"],[3,0,0,"-","evasion"],[4,0,0,"-","inversion"],[6,0,0,"-","labelleakage"],[7,0,0,"-","membership"],[8,0,0,"-","poison"]],"aijack.attack.base_attack":[[2,1,1,"","BaseAttacker"]],"aijack.attack.base_attack.BaseAttacker":[[2,2,1,"","attack"]],"aijack.attack.evasion":[[3,0,0,"-","evasion_attack"]],"aijack.attack.evasion.evasion_attack":[[3,1,1,"","Evasion_attack_sklearn"]],"aijack.attack.evasion.evasion_attack.Evasion_attack_sklearn":[[3,3,1,"","X_minus_1"],[3,2,1,"","attack"],[3,3,1,"","delta_g"],[3,3,1,"","distance"],[3,3,1,"","dmax"],[3,3,1,"","gamma"],[3,3,1,"","h"],[3,3,1,"","kde_type"],[3,3,1,"","lam"],[3,3,1,"","max_iter"],[3,3,1,"","n_minus_1"],[3,3,1,"","t"],[3,3,1,"","target_model"]],"aijack.attack.inversion":[[4,0,0,"-","gan_attack"],[4,0,0,"-","generator_attack"],[4,0,0,"-","gradientinversion"],[4,0,0,"-","mi_face"],[5,0,0,"-","utils"]],"aijack.attack.inversion.gan_attack":[[4,1,1,"","GANAttackManager"],[4,4,1,"","attach_ganattack_to_client"]],"aijack.attack.inversion.gan_attack.GANAttackManager":[[4,2,1,"","attach"]],"aijack.attack.inversion.generator_attack":[[4,1,1,"","Generator_Attack"]],"aijack.attack.inversion.generator_attack.Generator_Attack":[[4,2,1,"","attack"],[4,2,1,"","culc_loss"],[4,2,1,"","fit"]],"aijack.attack.inversion.gradientinversion":[[4,1,1,"","GradientInversionAttackManager"],[4,1,1,"","GradientInversion_Attack"],[4,4,1,"","attach_gradient_inversion_attack_to_server"]],"aijack.attack.inversion.gradientinversion.GradientInversionAttackManager":[[4,2,1,"","attach"]],"aijack.attack.inversion.gradientinversion.GradientInversion_Attack":[[4,2,1,"","attack"],[4,3,1,"","bn_reg_coef"],[4,3,1,"","bn_reg_layer_inputs"],[4,3,1,"","bn_reg_layers"],[4,3,1,"","custom_reg_coef"],[4,3,1,"","custom_reg_func"],[4,3,1,"","device"],[4,3,1,"","distancefunc"],[4,3,1,"","early_stopping"],[4,3,1,"","gc_reg_coef"],[4,2,1,"","group_attack"],[4,3,1,"","group_num"],[4,3,1,"","group_seed"],[4,3,1,"","l2_reg_coef"],[4,3,1,"","lm_reg_coef"],[4,3,1,"","log_interval"],[4,3,1,"","lossfunc"],[4,3,1,"","num_iteration"],[4,3,1,"","optimize_label"],[4,3,1,"","optimizer_class"],[4,3,1,"","pos_of_final_fc_layer"],[4,2,1,"","reset_seed"],[4,3,1,"","save_loss"],[4,3,1,"","seed"],[4,3,1,"","target_model"],[4,3,1,"","tv_reg_coef"],[4,3,1,"","x_shape"],[4,3,1,"","y_shape"]],"aijack.attack.inversion.mi_face":[[4,1,1,"","MI_FACE"]],"aijack.attack.inversion.mi_face.MI_FACE":[[4,2,1,"","attack"],[4,3,1,"","auxterm_func"],[4,3,1,"","input_shape"],[4,3,1,"","process_func"],[4,3,1,"","target_model"]],"aijack.attack.inversion.utils":[[5,0,0,"-","datarepextractor"],[5,0,0,"-","distance"],[5,0,0,"-","regularization"]],"aijack.attack.inversion.utils.datarepextractor":[[5,1,1,"","DataRepExtractor"]],"aijack.attack.inversion.utils.datarepextractor.DataRepExtractor":[[5,2,1,"","extract_datarep"],[5,2,1,"","get_dldw"]],"aijack.attack.inversion.utils.distance":[[5,4,1,"","cossim"],[5,4,1,"","l2"]],"aijack.attack.inversion.utils.regularization":[[5,4,1,"","bn_regularizer"],[5,4,1,"","group_consistency"],[5,4,1,"","label_matching"],[5,4,1,"","total_variance"]],"aijack.attack.labelleakage":[[6,0,0,"-","normattack"]],"aijack.attack.labelleakage.normattack":[[6,1,1,"","NormAttackManager"],[6,4,1,"","attach_normattack_to_splitnn"]],"aijack.attack.labelleakage.normattack.NormAttackManager":[[6,2,1,"","attach"]],"aijack.attack.membership":[[7,0,0,"-","membership_inference"]],"aijack.attack.membership.membership_inference":[[7,1,1,"","AttackerModel"],[7,1,1,"","Membership_Inference"],[7,1,1,"","ShadowModel"]],"aijack.attack.membership.membership_inference.AttackerModel":[[7,2,1,"","fit"],[7,2,1,"","predict"],[7,2,1,"","predict_proba"]],"aijack.attack.membership.membership_inference.Membership_Inference":[[7,2,1,"","attack"],[7,2,1,"","predict"],[7,2,1,"","predict_proba"],[7,2,1,"","train_attacker"],[7,2,1,"","train_shadow"]],"aijack.attack.membership.membership_inference.ShadowModel":[[7,2,1,"","fit_transform"],[7,2,1,"","get_score"]],"aijack.attack.poison":[[8,0,0,"-","poison_attack"]],"aijack.attack.poison.poison_attack":[[8,1,1,"","Poison_attack_sklearn"]],"aijack.attack.poison.poison_attack.Poison_attack_sklearn":[[8,3,1,"","X_train"],[8,2,1,"","attack"],[8,3,1,"","delta_kernel"],[8,3,1,"","kernel"],[8,3,1,"","t"],[8,3,1,"","target_model"],[8,3,1,"","y_train"]],"aijack.collaborative":[[10,0,0,"-","core"],[11,0,0,"-","dsfl"],[12,0,0,"-","fedavg"],[13,0,0,"-","fedgems"],[14,0,0,"-","fedkd"],[15,0,0,"-","fedmd"],[16,0,0,"-","fedprox"],[17,0,0,"-","optimizer"],[18,0,0,"-","secureboost"],[20,0,0,"-","splitnn"],[9,0,0,"-","utils"]],"aijack.collaborative.core":[[10,0,0,"-","api"],[10,0,0,"-","client"],[10,0,0,"-","server"]],"aijack.collaborative.core.api":[[10,1,1,"","BaseFLKnowledgeDistillationAPI"]],"aijack.collaborative.core.api.BaseFLKnowledgeDistillationAPI":[[10,2,1,"","local_score"],[10,2,1,"","run"],[10,2,1,"","score"],[10,2,1,"","train_client"]],"aijack.collaborative.core.client":[[10,1,1,"","BaseClient"]],"aijack.collaborative.core.client.BaseClient":[[10,2,1,"","backward"],[10,2,1,"","download"],[10,2,1,"","eval"],[10,2,1,"","forward"],[10,2,1,"","train"],[10,3,1,"","training"],[10,2,1,"","upload"]],"aijack.collaborative.core.server":[[10,1,1,"","BaseServer"]],"aijack.collaborative.core.server.BaseServer":[[10,2,1,"","action"],[10,2,1,"","distribtue"],[10,2,1,"","eval"],[10,2,1,"","forward"],[10,2,1,"","train"],[10,3,1,"","training"],[10,2,1,"","update"]],"aijack.collaborative.dsfl":[[11,0,0,"-","api"],[11,0,0,"-","client"],[11,0,0,"-","server"]],"aijack.collaborative.dsfl.api":[[11,1,1,"","DSFLAPI"]],"aijack.collaborative.dsfl.api.DSFLAPI":[[11,2,1,"","run"]],"aijack.collaborative.dsfl.client":[[11,1,1,"","DSFLClient"],[11,4,1,"","torch_round_x_decimal"]],"aijack.collaborative.dsfl.client.DSFLClient":[[11,2,1,"","approach_consensus"],[11,2,1,"","download"],[11,3,1,"","training"],[11,2,1,"","upload"]],"aijack.collaborative.dsfl.server":[[11,1,1,"","DSFLServer"]],"aijack.collaborative.dsfl.server.DSFLServer":[[11,2,1,"","action"],[11,2,1,"","distribute"],[11,3,1,"","training"],[11,2,1,"","update"],[11,2,1,"","update_globalmodel"]],"aijack.collaborative.fedavg":[[12,0,0,"-","api"],[12,0,0,"-","client"],[12,0,0,"-","server"]],"aijack.collaborative.fedavg.api":[[12,1,1,"","FedAVGAPI"]],"aijack.collaborative.fedavg.api.FedAVGAPI":[[12,2,1,"","run"]],"aijack.collaborative.fedavg.client":[[12,1,1,"","FedAvgClient"]],"aijack.collaborative.fedavg.client.FedAvgClient":[[12,2,1,"","download"],[12,3,1,"","training"],[12,2,1,"","upload"],[12,2,1,"","upload_gradients"],[12,2,1,"","upload_parameters"]],"aijack.collaborative.fedavg.server":[[12,1,1,"","FedAvgServer"]],"aijack.collaborative.fedavg.server.FedAvgServer":[[12,2,1,"","action"],[12,2,1,"","distribtue"],[12,2,1,"","receive"],[12,2,1,"","receive_local_gradients"],[12,2,1,"","receive_local_parameters"],[12,3,1,"","training"],[12,2,1,"","updata_from_gradients"],[12,2,1,"","update"],[12,2,1,"","update_from_parameters"]],"aijack.collaborative.fedgems":[[13,0,0,"-","api"],[13,0,0,"-","client"],[13,0,0,"-","server"]],"aijack.collaborative.fedgems.api":[[13,1,1,"","FedGEMSAPI"]],"aijack.collaborative.fedgems.api.FedGEMSAPI":[[13,2,1,"","run"],[13,2,1,"","train_client_on_public_dataset"],[13,2,1,"","train_server_on_public_dataset"]],"aijack.collaborative.fedgems.client":[[13,1,1,"","FedGEMSClient"],[13,4,1,"","torch_round_x_decimal"]],"aijack.collaborative.fedgems.client.FedGEMSClient":[[13,2,1,"","culc_loss_on_public_dataset"],[13,2,1,"","download"],[13,3,1,"","training"],[13,2,1,"","upload"]],"aijack.collaborative.fedgems.server":[[13,1,1,"","FedGEMSServer"]],"aijack.collaborative.fedgems.server.FedGEMSServer":[[13,2,1,"","action"],[13,2,1,"","distribtue"],[13,2,1,"","self_evaluation_on_the_public_dataset"],[13,3,1,"","training"],[13,2,1,"","update"]],"aijack.collaborative.fedkd":[[14,0,0,"-","client"]],"aijack.collaborative.fedkd.client":[[14,1,1,"","FedKDClient"]],"aijack.collaborative.fedkd.client.FedKDClient":[[14,2,1,"","loss"],[14,3,1,"","training"]],"aijack.collaborative.fedmd":[[15,0,0,"-","api"],[15,0,0,"-","client"],[15,0,0,"-","nfdp"],[15,0,0,"-","server"]],"aijack.collaborative.fedmd.api":[[15,1,1,"","FedMDAPI"]],"aijack.collaborative.fedmd.api.FedMDAPI":[[15,2,1,"","run"],[15,2,1,"","train_server"]],"aijack.collaborative.fedmd.client":[[15,1,1,"","FedMDClient"],[15,4,1,"","torch_round_x_decimal"]],"aijack.collaborative.fedmd.client.FedMDClient":[[15,2,1,"","approach_consensus"],[15,2,1,"","download"],[15,3,1,"","training"],[15,2,1,"","upload"]],"aijack.collaborative.fedmd.nfdp":[[15,4,1,"","get_delta_of_fedmd_nfdp"],[15,4,1,"","get_epsilon_of_fedmd_nfdp"],[15,4,1,"","get_k_of_fedmd_nfdp"]],"aijack.collaborative.fedmd.server":[[15,1,1,"","FedMDServer"]],"aijack.collaborative.fedmd.server.FedMDServer":[[15,2,1,"","action"],[15,2,1,"","distribute"],[15,2,1,"","forward"],[15,3,1,"","training"],[15,2,1,"","update"]],"aijack.collaborative.fedprox":[[16,0,0,"-","api"]],"aijack.collaborative.fedprox.api":[[16,1,1,"","FedProxAPI"]],"aijack.collaborative.fedprox.api.FedProxAPI":[[16,2,1,"","run"]],"aijack.collaborative.optimizer":[[17,0,0,"-","adam"],[17,0,0,"-","base"],[17,0,0,"-","sgd"]],"aijack.collaborative.optimizer.adam":[[17,1,1,"","AdamFLOptimizer"]],"aijack.collaborative.optimizer.adam.AdamFLOptimizer":[[17,2,1,"","step"]],"aijack.collaborative.optimizer.base":[[17,1,1,"","BaseFLOptimizer"]],"aijack.collaborative.optimizer.base.BaseFLOptimizer":[[17,2,1,"","step"]],"aijack.collaborative.optimizer.sgd":[[17,1,1,"","SGDFLOptimizer"]],"aijack.collaborative.optimizer.sgd.SGDFLOptimizer":[[17,2,1,"","step"]],"aijack.collaborative.secureboost":[[19,0,0,"-","wrapper"]],"aijack.collaborative.secureboost.wrapper":[[19,0,0,"-","classifier"],[19,0,0,"-","node"]],"aijack.collaborative.secureboost.wrapper.classifier":[[19,1,1,"","SecureBoostClassifier"]],"aijack.collaborative.secureboost.wrapper.node":[[19,1,1,"","Node"],[19,1,1,"","Party"]],"aijack.collaborative.splitnn":[[20,0,0,"-","client"],[20,0,0,"-","flow"]],"aijack.collaborative.splitnn.client":[[20,1,1,"","SplitNNClient"]],"aijack.collaborative.splitnn.client.SplitNNClient":[[20,2,1,"","distribute"],[20,2,1,"","download"],[20,2,1,"","forward"],[20,3,1,"","training"],[20,2,1,"","upload"]],"aijack.collaborative.splitnn.flow":[[20,1,1,"","SplitNN"]],"aijack.collaborative.splitnn.flow.SplitNN":[[20,2,1,"","backward"],[20,2,1,"","backward_gradient"],[20,2,1,"","eval"],[20,2,1,"","forward"],[20,2,1,"","step"],[20,2,1,"","train"],[20,3,1,"","training"],[20,2,1,"","zero_grad"]],"aijack.collaborative.utils":[[9,4,1,"","transform_list_to_tensor"]],"aijack.defense":[[22,0,0,"-","ckks"],[23,0,0,"-","dp"],[25,0,0,"-","mid"],[21,0,0,"-","purifier"],[27,0,0,"-","soteria"]],"aijack.defense.ckks":[[22,0,0,"-","ciphertext"],[22,0,0,"-","encoder"],[22,0,0,"-","encrypter"],[22,0,0,"-","plaintext"],[22,0,0,"-","random"],[22,0,0,"-","utils"]],"aijack.defense.ckks.ciphertext":[[22,1,1,"","CKKSCiphertext"]],"aijack.defense.ckks.encoder":[[22,1,1,"","CKKSEncoder"]],"aijack.defense.ckks.encoder.CKKSEncoder":[[22,2,1,"","compute_basis_coordinates"],[22,2,1,"","decode"],[22,2,1,"","encode"],[22,2,1,"","pi"],[22,2,1,"","pi_inverse"],[22,2,1,"","sigma"],[22,2,1,"","sigma_R_discretization"],[22,2,1,"","sigma_inverse"]],"aijack.defense.ckks.encrypter":[[22,1,1,"","CKKSEncrypter"]],"aijack.defense.ckks.encrypter.CKKSEncrypter":[[22,2,1,"","decrypt"],[22,2,1,"","decrypt_to_plaintext"],[22,2,1,"","encrypt"],[22,2,1,"","encrypt_from_plaintext"],[22,2,1,"","keygen"],[22,2,1,"","set_pk"],[22,2,1,"","set_sk"]],"aijack.defense.ckks.plaintext":[[22,1,1,"","CKKSPlaintext"]],"aijack.defense.ckks.random":[[22,4,1,"","gen_binary_poly"],[22,4,1,"","gen_normal_poly"],[22,4,1,"","gen_uniform_poly"]],"aijack.defense.ckks.utils":[[22,4,1,"","coordinate_wise_random_rounding"],[22,4,1,"","polydiv_coef"],[22,4,1,"","round_coordinates"]],"aijack.defense.dp":[[24,0,0,"-","manager"]],"aijack.defense.dp.manager":[[24,0,0,"-","accountant"],[24,0,0,"-","dataloader"],[24,0,0,"-","optimizer"],[24,0,0,"-","privacy_manager"],[24,0,0,"-","rdp"],[24,0,0,"-","utils"]],"aijack.defense.dp.manager.accountant":[[24,1,1,"","BaseMomentAccountant"],[24,1,1,"","GeneralMomentAccountant"]],"aijack.defense.dp.manager.accountant.BaseMomentAccountant":[[24,2,1,"","add_step_info"],[24,2,1,"","get_delta"],[24,2,1,"","get_epsilon"],[24,2,1,"","get_noise_multiplier"],[24,2,1,"","reset_step_info"],[24,2,1,"","step"]],"aijack.defense.dp.manager.dataloader":[[24,1,1,"","PoissonSampler"]],"aijack.defense.dp.manager.optimizer":[[24,4,1,"","attach_differential_privacy_mechanism"]],"aijack.defense.dp.manager.privacy_manager":[[24,1,1,"","PrivacyManager"]],"aijack.defense.dp.manager.privacy_manager.PrivacyManager":[[24,2,1,"","privatize"]],"aijack.defense.dp.manager.rdp":[[24,4,1,"","culc_general_upperbound_of_rdp_with_theorem5_of_zhu_2019"],[24,4,1,"","culc_tightupperbound_lowerbound_of_rdp_with_theorem6and8_of_zhu_2019"],[24,4,1,"","culc_tightupperbound_lowerbound_of_rdp_with_theorem6and8_of_zhu_2019_with_tau_estimation"],[24,4,1,"","culc_upperbound_of_rdp_with_Sampled_Gaussian_Mechanism"],[24,4,1,"","culc_upperbound_of_rdp_with_Sampled_Gaussian_Mechanism_float"],[24,4,1,"","culc_upperbound_of_rdp_with_Sampled_Gaussian_Mechanism_int"],[24,4,1,"","culc_upperbound_of_rdp_with_theorem27_of_wang_2019"],[24,4,1,"","eps_gaussian"],[24,4,1,"","eps_laplace"],[24,4,1,"","eps_randresp"]],"aijack.defense.mid":[[25,0,0,"-","loss"],[25,0,0,"-","nn"]],"aijack.defense.mid.loss":[[25,4,1,"","KL_between_normals"],[25,4,1,"","mib_loss"]],"aijack.defense.mid.nn":[[25,1,1,"","VIB"]],"aijack.defense.mid.nn.VIB":[[25,2,1,"","forward"],[25,2,1,"","get_params_of_p_z_given_x"],[25,2,1,"","loss"],[25,2,1,"","sampling_from_encoder"],[25,3,1,"","training"]],"aijack.defense.purifier":[[21,4,1,"","PurifierLoss"],[21,1,1,"","Purifier_Cifar10"]],"aijack.defense.purifier.Purifier_Cifar10":[[21,2,1,"","forward"],[21,3,1,"","training"]],"aijack.defense.soteria":[[27,0,0,"-","soteria_client"]],"aijack.defense.soteria.soteria_client":[[27,1,1,"","SoteriaManager"],[27,4,1,"","attach_soteria_to_client"]],"aijack.defense.soteria.soteria_client.SoteriaManager":[[27,2,1,"","attach"]],"aijack.manager":[[28,0,0,"-","base"]],"aijack.manager.base":[[28,1,1,"","BaseManager"]],"aijack.manager.base.BaseManager":[[28,2,1,"","attach"]],"aijack.utils":[[29,0,0,"-","dataloader"],[29,0,0,"-","metrics"],[29,4,1,"","torch_round_x_decimal"],[29,0,0,"-","utils"]],"aijack.utils.dataloader":[[29,4,1,"","prepareFederatedMNISTDataloaders"]],"aijack.utils.metrics":[[29,4,1,"","accuracy_torch_dataloader"],[29,4,1,"","crossentropyloss_between_logits"],[29,4,1,"","total_variance"]],"aijack.utils.utils":[[29,1,1,"","NumpyDataset"],[29,1,1,"","RoundDecimal"],[29,4,1,"","torch_round_x_decimal"],[29,4,1,"","try_gpu"],[29,4,1,"","worker_init_fn"]],"aijack.utils.utils.RoundDecimal":[[29,2,1,"","backward"],[29,2,1,"","forward"]],aijack:[[2,0,0,"-","attack"],[9,0,0,"-","collaborative"],[21,0,0,"-","defense"],[28,0,0,"-","manager"],[29,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"0":[0,3,4,6,8,10,11,12,13,14,15,16,17,19,20,21,22,24,25,27,29],"00":0,"0001":[0,17],"001":[0,25],"01":[0,4,16,17,24],"02610":0,"03915":21,"05241":0,"05820":7,"06127":16,"06131":3,"06180":11,"08":17,"08504":0,"1":[3,4,5,11,12,13,14,15,19,22,24,29,30],"10":[3,4,13,24,25],"100":[4,7],"10000":24,"10397":0,"11027":13,"1145":4,"1206":[0,8],"13323":14,"16":29,"1610":7,"16937":0,"16947":0,"1708":3,"1812":16,"1e":[0,17],"1st":17,"2":[3,4,19,21,22,24,27,29,30],"20":29,"200":8,"2001":0,"2004":0,"2005":21,"2008":11,"2009":0,"2012":0,"2013":0,"2015":0,"2016":0,"2017":0,"2019":0,"2020":[0,11],"2021":[0,13],"2102":0,"2108":14,"2110":13,"22nd":0,"255":3,"256":25,"2810103":4,"2813677":4,"2nd":17,"3":[3,19,24,30],"300":3,"32":0,"33":0,"4":[19,30],"42":7,"5":[3,4,8,24,29,30],"50":4,"5000":3,"6389":[0,8],"64":[0,4,24],"69501":29,"7":0,"75":13,"8":[15,17],"9":17,"999":17,"\u03bb":21,"\u03bbc":21,"abstract":[2,10,17,28],"boolean":29,"break":0,"class":[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,19,20,21,22,24,25,27,28,29],"default":[4,8,10,11,13,15,17,20],"final":4,"float":[3,4,10,11,13,15,17,22],"function":[3,4,10,11,12,13,15,20,21,25,29],"import":0,"int":[3,4,7,10,11,13,15,22],"public":[10,11,13,15,22],"return":[3,4,7,8,10,11,13,15,20,21,22,29],"static":29,"true":[4,5,7,8,10,12,14,15,20,29],"try":[0,3],"var":3,"while":[10,15,20,21,25],A:0,If:[4,29],It:29,The:[4,29],_:0,_description_:11,_ep:24,a_alpha:24,ab:[3,7,8,14,16,21],abadi:0,about:7,accept:29,account:[0,21,23],accuraci:21,accuracy_criterion:21,accuracy_torch_dataload:29,acm:[0,4],action:[0,10,11,12,13,15],adam:[0,1,9],adamfloptim:17,adaptive_distillation_loss:14,adaptive_hidden_loss:14,add_step_info:24,advanc:0,adversari:[3,8],affect:[10,20],afterward:[10,15,20,21,25],against:[2,3,21,30],aggreg:11,ai:0,aijack:0,aijack_secureboost:19,al:[0,11,13],algorithm:[2,21,30],alia:29,all:[10,15,20,21,25,29],allow:29,alpha:24,also:29,although:[10,15,20,21,25],an:[3,7,8,11,13,22,29],ani:[10,20,24,29],api:[1,9],apply_softmax:4,approach_consensu:[11,15],approximated_z_mean:25,approximated_z_sigma:25,ar:[10,20,29],arbitrari:29,arbitrary_i:4,arg:[4,6,7,16,19,27,29],argmax:21,argmin_x:4,argument:29,arrai:[3,7,22,29],arxiv:[0,3,7,8,11,13,14,16,21],atenies:0,attach:[0,4,6,27,28],attach_differential_privacy_mechan:24,attach_ganattack_to_cli:4,attach_gradient_inversion_attack_to_serv:4,attach_normattack_to_splitnn:6,attach_soteria_to_cli:27,attack:[1,30,31],attack_criterion:6,attack_model:7,attack_sklearn:3,attacker_model:4,attacker_optim:4,attackermodel:7,attackers_dataset:0,attacl:7,attribut:29,attriut:[7,29],autoencod:21,autograd:29,automat:[4,10,29],auxterm_func:4,avail:29,averag:[10,11,13,21,29],backend:24,backward:[0,10,20,29],backward_gradi:20,badwidtch:3,balanc:21,base:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,21,22,24,25,27,29,30,31],base_attack:[1,3,4,7,8,30,31],base_loss_func:[13,15],baseattack:[2,3,4,7,8],basecli:[10,11,12,13,15,20],baseflknowledgedistillationapi:[10,11,13,15],basefloptim:17,basemanag:[4,6,27,28],basemomentaccount:24,baseserv:[10,11,12,13,15],basi:22,basic:[0,17,21,22],batch:[0,4],batch_load:0,batch_siz:[4,15,24,25,29],batchnorm:[10,20],battista:0,becom:4,behavior:[0,10,20],being:22,berlin:0,best:4,best_img:4,beta1:17,beta2:17,beta:25,between:[3,4,10,11,20,29],bia:5,biggio:0,bilen:0,binari:8,binaru:7,blain:0,blak:0,blog:22,bn:4,bn_layer:5,bn_reg_coef:[0,4],bn_reg_lay:[0,4],bn_reg_layer_input:4,bn_regular:5,bo:0,bodi:0,bool:[10,11,12,13,14,15,20,21,25],boosting_round:19,bound_typ:[0,24],box:0,briland:0,c0:22,c1:22,c:[21,22],calcul:10,call:[10,13,15,20,21,25],came:7,can:[4,29],cannot:[0,3],care:[10,15,20,21,25],certain:[10,20],cheng:13,cifar10:21,ciphertext:[1,21],ckk:[0,1,21],ckksciphertext:22,ckksencod:22,ckksencrypt:22,ckksplaintext:22,cl:[4,6,24,27],clamp_rang:4,classifi:[0,3,7,8,9,18],clf:0,client:[0,1,4,9],client_num:29,client_optim:[11,13,15],closed_lock_with_kei:0,coeff:22,coeffcient:22,coeffeci:22,coeffici:[4,17,22],collabor:[1,30,31],com:0,commun:[0,10,11,12,13,15],comparison:[10,20],compat:29,complex:22,compos:29,comput:[0,10,15,20,21,22,24,25,29],computatio:24,compute_basis_coordin:22,confer:0,confid:0,confidens:21,confidenti:7,confus:[10,20],conjug:22,consensu:11,consensus_epoch:15,consensus_loss_func:15,consensus_optim:[11,15],consist:4,constant:4,contact:30,contain:[0,3],context:[20,29],control:[0,21],conv:0,convert:29,coordin:22,coordinate_wise_random_round:22,core:[1,9,11,12,13,15,20],correctli:[0,3],correspond:[4,29],cossim:[0,5],countermeasur:0,cpl:0,cpl_manag:0,cpp:24,cpu:[0,4,6,11,12,13,15,29],creat:[3,8],criterion:[0,10,11,12,13,15],cross:[21,29],crossentropi:11,crossentropyloss:[4,13,15,21],crossentropyloss_between_logit:29,cruz:0,ct:22,ctx:29,culc_general_upperbound_of_rdp_with_theorem5_of_zhu_2019:24,culc_loss:4,culc_loss_on_public_dataset:13,culc_tightupperbound_lowerbound_of_rdp_with_theorem6and8_of_zhu_2019:24,culc_tightupperbound_lowerbound_of_rdp_with_theorem6and8_of_zhu_2019_with_tau_estim:24,culc_upperbound_of_rdp_with_sampled_gaussian_mechan:24,culc_upperbound_of_rdp_with_sampled_gaussian_mechanism_float:24,culc_upperbound_of_rdp_with_sampled_gaussian_mechanism_int:24,culc_upperbound_of_rdp_with_theorem27_of_wang_2019:24,culcul:4,current:29,custom:[4,13],custom_act:[11,12,13,15],custom_generate_fake_grad_fn:4,custom_reg_coef:4,custom_reg_func:4,cvf:0,d:3,data:[0,3,4,7,8,10,11,13,20,29],data_tensor:4,databas:0,dataest:11,dataload:[0,1,4,10,11,13,21,23,30,31],datarepextractor:[2,4],dataset:[0,3,6,7,8,9,10,11,13,15,24,29],dataset_s:24,decai:17,decis:3,decod:[0,22,25],decrypt:22,decrypt_to_plaintext:22,deep:0,defenc:30,defens:[1,30,31],defin:[10,15,20,21,25,29],degre:22,degreg:8,delta:[15,24],delta_g:3,delta_kernel:8,delta_w:4,densiti:3,depth:19,descent:0,detail:[10,20],determin:0,deviat:[3,22],devic:[0,4,6,10,11,12,13,15,29],devis:17,dict:[7,10],differ:4,differenti:[10,24,29,30],digit:11,dim_of_latent_spac:0,dim_z:25,dimens:11,directli:29,disabl:[10,20],discoveri:0,discret:22,discrimin:3,discuss:29,distanc:[2,3,4,11],distancefunc:4,distancenam:[0,4],distil:[10,11,15],distillation_loss_nam:11,distribtu:[10,12,13],distribut:[10,11,12,13,15,20,22],dl:4,dldw:5,dlg:0,dlg_manag:0,dmax:3,doc:[10,20],document:[0,10,20],doe:29,doi:4,download:[10,11,12,13,15,20,29],dp:[1,21],dpoptimizer_cl:0,dpsgd:0,dropout:[10,20],ds:11,dsfl:[0,1,9],dsflapi:11,dsflclient:11,dsflserver:11,dure:[4,29],e:[10,20,21,29],each:[4,7,10,11,12,13,15,29],earli:4,early_stop:4,easi:0,effect:[10,20],effici:11,either:29,element:7,encod:[0,1,21,25],encrypt:[1,21,30],encrypt_from_plaintext:22,end:13,enforc:29,entropi:[21,29],ep:19,epoch:[4,11,13],epoch_client_on_localdataset:13,epoch_client_on_publicdataset:13,epoch_global_distil:11,epoch_local_distil:11,epoch_local_train:11,epoch_server_on_publicdataset:13,eps_gaussian:24,eps_laplac:24,eps_randresp:24,epsilon:[13,15,17,24,27],equival:[10,20,29],era:11,era_temperatur:11,estim:[3,4],et:[0,11,13],etc:[10,20],european:0,eval:[10,20],evalu:[0,10,13,20,22],evas:[1,2,30],evasion_attack:[1,2],evasion_attack_sklearn:[0,3],everi:[10,13,15,20,21,25],exampl:[3,8,30],execut:[4,10,11,12,13,15],expand:22,explain:22,exploit:0,exponenti:17,express:7,extract:4,extract_datarep:5,f:[3,21],face:0,fake_gradi:5,fals:[0,4,7,10,20,29],fc:4,feature_map:5,fedavg:[0,1,9,14,16],fedavgapi:[12,16],fedavgcli:[0,12,14],fedavgserv:[0,12],fedavgserver_cpl:0,fedavgserver_dlg:0,fedavgserver_g:0,fedavgserver_gi:0,fedavgserver_idlg:0,feder:[10,11,13,15,17,30],fedgem:[0,1,9],fedgemsapi:13,fedgemscli:13,fedgemsserv:13,fedkd:[0,1,9],fedkdclient:14,fedmd:[0,1,9],fedmdapi:15,fedmdclient:15,fedmdserv:15,fedprox:[0,1,9],fedproxapi:16,fernando:0,find:4,finit:24,first:[22,29],fit:[4,7],fit_transform:7,fl:[0,11],flow:[1,9],foe:10,follow:[4,21,29],format:7,former:[10,15,20,21,25],formula:29,forward:[10,15,20,21,25,29],fot:11,fraction:24,framework:0,fredrikson:0,from:[0,4,7,10,11,12,13,15,20],func:3,fusion:13,futur:3,g:[10,20,21,29],g_list:3,gamma:[3,19],gan:0,gan_attack:[1,2],gan_batch_s:4,gan_epoch:4,gan_log_interv:4,ganattackfedavgcli:0,ganattackmanag:[0,4],gaussian:[0,24],gc_reg_coef:[0,4],geip:0,gen_binary_poli:22,gen_normal_poli:22,gen_uniform_poli:22,gener:[0,4,22],generalmomentaccount:[0,24],generator_attack:[1,2],generator_criterion:4,generator_optim:4,get:7,get_delta:24,get_delta_of_fedmd_nfdp:15,get_dldw:5,get_epsilon:24,get_epsilon_of_fedmd_nfdp:15,get_k_of_fedmd_nfdp:15,get_noise_multipli:24,get_params_of_p_z_given_x:25,get_scor:7,gi:0,gi_manag:0,git:0,github:0,giusepp:0,give:[10,17,22],given:[3,4,7,10,29],global:[9,10,11,12,13,15,17,20],global_logit:11,global_model:[0,11,12,13],global_optim:11,globe_with_meridian:0,gmail:0,gpu:29,grad:[10,17,20,29],grad_from_next_cli:20,grad_output:29,gradient:[0,4,17,20,29],gradient_compression_ratio:14,gradient_ignore_po:[4,5],gradientinvers:[1,2],gradientinversion_attack:[0,4],gradientinversionattackmanag:[0,4],gradinvattack_kwarg:4,gradinvers:0,grads_output:20,greedi:0,ground:29,group:4,group_attack:4,group_consist:5,group_num:[0,4],group_se:4,group_x:5,gs:0,gs_manag:0,guarante:0,h:[3,22],ha:[10,20,29],hakan:0,han:0,have:29,he:3,heidelberg:0,heterogen:15,hijack:0,hitaj:0,homomorph:30,hongxu:0,hook:[10,15,20,21,25],how:0,http:[0,3,4,7,8,14,16,21,22,29],i:[0,22],id:[10,11],ident:4,idlg:0,idlg_manag:0,idx:13,ieee:0,ignor:[10,15,20,21,25],ignore_first_download:4,iid:11,imag:[0,4],implement:[0,4,8,10,11,13,14,15,16,17],improv:[0,3],in_out_pr:7,index:[13,30],inf:19,infer:[6,7,30],inform:[0,6,7],informatino:[10,12,13,15,20],init_x:4,initi:[3,8],initial_datapoint:0,inject:0,input:[0,4,13,20,29],input_lay:27,input_shap:[0,4],insert:8,instal:30,instanc:[4,10,11,15,20,21,25],instead:[10,15,20,21,25,29],int64:0,integ:22,integr:22,intend:29,intermidi:20,intermidiate_to_next_cli:20,interv:4,invers:[1,2,22,30],invert:0,io:0,itahara:11,iter:[0,3,4,7,24],its:22,jha:0,jia:0,jingwei:0,joint:0,jona:0,just:29,jvp:29,k:15,kde:3,kde_typ:3,kei:[7,22],kernel:[3,8],keygen:22,kl_between_norm:25,kldiv_loss_func:13,kldivloss:13,knowledg:[0,10,13],konda:0,koukyosyumei:0,kwarg:[4,6,16,19,27,29],l1:3,l1loss:15,l2:[0,3,4,5],l2_norm_clip:[0,24],l2_reg_coef:[0,4],l:21,l_grad:4,label:[4,5,6,7,8,13,29,30],label_match:5,labelleakag:[1,2],lam:[0,3,4,19,21],lambda:[4,11,12,13,15],larger:13,laskov:0,latter:[10,15,20,21,25],lattic:22,layer:4,lbfg:4,leak_auc:0,leakag:[6,30],learn:[2,3,4,8,9,10,11,12,13,15,17,20,21,30],learning_r:19,learnt:3,len_public_dataload:13,li:0,ligeng:0,lin:0,list:[0,3,4,10,11,13,17],lit:4,liu:0,llist:11,lm_reg_coef:[0,4],local:[9,10,11,12,13,15,20],local_data_num:29,local_dataload:[10,11,12,13,15],local_epoch:12,local_label_num:29,local_model_1:0,local_model_2:0,local_optim:[0,12],local_scor:10,local_trainload:0,lof:3,log:[0,3,4,8,24],log_interv:4,log_show_img:4,logit:[11,13,15,29],loss:[0,1,4,5,10,11,13,14,20,21,29],loss_purifi:21,lossfunc:4,lot_load:0,lot_siz:24,lr:[0,12,13,17],m:[5,22],machin:[0,2,3,4,8,21],mai:[10,20],mainli:22,malici:[0,3,8],manag:[0,1,4,6,21,23,27,30,31],mani:29,martin:0,match:4,mathemat:0,matt:0,max:3,max_it:3,max_iter:24,maxium:3,mean:[22,29],mechan:[10,20,24],membership:[1,2,30],membership_infer:[1,2],metric:[1,30,31],mi:0,mi_fac:[0,1,2],mib_loss:[0,25],mid:[0,1,21],min_child_weight:19,min_leaf:19,minim:[11,21],misclasssifi:3,mnist:29,mod:22,mode:[10,20,29],model:[3,4,7,8,9,10,11,12,13,15,17,20,21,29,30],model_1:0,model_2:0,model_paramet:12,model_params_list:9,modul:[1,18,23,30,31],modulu:22,mopuri:0,more:20,mseloss:21,mu:[16,25],mu_p:25,mu_q:25,multipl:[0,4,9],must:29,mutual:0,n:[15,22],n_digit:29,n_minus_1:3,name:24,nan:4,necessari:0,need:[3,10,15,20,21,25,29],needs_input_grad:29,nelson:0,net:[0,5],network:17,neural:[0,17],nfdp:[1,9],nn:[1,10,11,17,20,21,30],node:[9,18],noise_multipli:[0,24],noise_multiplier_kei:24,noise_multiplier_max:24,noise_multiplier_min:24,noise_multiplier_precis:24,noise_param:24,noise_typ:[0,24],non:[11,29],none:[4,7,11,12,13,15,20,27,29],norm:0,normal:[0,4,22,29],normattack:[1,2],normattackmanag:[0,6],normattacksplitnn:0,notimplementederror:11,np:[3,7,22,29],num_commun:[10,11,12,13,15],num_fc_lay:5,num_iter:[4,8,24],num_itr:[0,4,7],num_model:7,num_sampl:[0,25],num_step:24,number:[3,4,7,10,11,13,22,29],numer:24,numpi:[3,22,29],numpydataset:29,nz:[0,4],o:15,object:[2,3,5,7,10,12,17,21,22,24,28],off:3,offici:0,one:[3,7,10,15,20,21,25],onli:[3,4,10,20],openmin:22,oper:[0,29],optim:[0,1,4,9,11,13,20,21,23],optimize_label:[0,4],optimizer_cl:24,optimizer_class:4,optimizer_g:0,optimizer_kwarg:12,optimizer_typ:12,optimizernam:4,option:[10,11,13,15,17],order:[0,17,24],order_max:24,order_min:24,org:[3,4,7,8,14,16,21,22,29],orthogon:22,oscar:0,other:[29,30],output:[0,4,7,11,20,29],output_dim:[11,13,15],overridden:[10,15,20,21,25,29],own:11,p:22,p_z_given_x_mu:25,p_z_given_x_sigma:25,packag:[0,30,31],page:30,paper:0,param:[22,24,29],paramet:[0,3,4,7,8,10,11,13,15,17,20,21,22,29],paramt:3,part:22,parti:[0,19],particular:[10,20],pass:[10,15,20,21,25,29],path:29,pattern:0,pavel:0,pdf:4,perez:0,perform:[0,8,10,15,20,21,22,25,29],perspect:0,perturbed_lay:27,pi:22,pi_invers:22,pip:0,pk:22,plaintext:[1,21],point:[3,8],poison:[1,2,30],poison_attack:[1,2],poison_attack_sklearn:[0,8],poissonsampl:24,polinoimi:22,polinomi:22,poly_mod:22,polydiv_coef:22,polynom:22,polynomi:22,pos_of_final_fc_lay:4,posit:[4,24],possibl:7,precis:24,pred:[0,5,7],pred_purifi:21,predict:[4,7,13,21,29],predict_proba:7,predicted_valu:13,predicted_values_of_serv:[13,15],preparefederatedmnistdataload:29,preprint:[0,11,13],preserv:21,prev_intermedi:20,prevent:17,privaci:[24,30],privacy_manag:[0,21,23],privacymanag:[0,24],privat:[0,4,6,11,13,24],proba:7,probabl:7,proceed:0,process:0,process_func:4,project:22,protect:0,provabl:0,provid:0,pt:22,public_dataload:[10,11,13,15],purif:21,purifi:[1,30,31],purifier_cifar10:21,purifier_criterion:21,purifierloss:21,pybind11:0,pytorch:29,q:[22,24],quick:30,r:[4,21,22,29],r_aux:4,rais:[3,4,11],random:[1,4,7,21],randonmli:22,rang:0,rate:17,rdp:[21,23],rdp_tight_upperbound:0,rdp_upperbound_closedformula:24,receiv:[4,11,12],receive_local_gradi:12,receive_local_paramet:12,received_gradi:[4,5],recip:[10,15,20,21,25],recognit:0,reconstruct:[0,4,21],reconstructed_data:0,reconstructed_imag:0,reconstructed_label:0,record:0,recoveri:0,reddi:0,reduct:29,refer:[3,4,7,8,21],regist:[10,13,15,20,21,25],regular:[0,2,4],remov:22,renyi:24,replac:15,repres:[22,29],represent:0,requir:29,reset:4,reset_se:4,reset_step_info:24,reshapr:21,resourc:30,respect:22,rest:22,result:[0,7],result_dict:[0,7,25],retriev:29,return_best:4,return_idx:29,reveal:7,revisit_epoch:15,ristenpart:0,robust:0,root:22,round:[11,22],round_coordin:22,round_decim:[11,13,15],rounddecim:29,routin:[10,11,12,13,15],row:3,run:[10,11,12,13,15,16,20,21,25],ruoxi:0,s:0,sampl:[15,24],sampled_y_pr:25,samples_amount:0,sampling_from_encod:25,sampling_r:24,save:[4,29],save_for_backward:29,save_for_forward:29,save_loss:4,scale:22,score:[4,8,10,21],search:[0,24,30],secret:[4,22],secur:0,secureboost:[0,1,9],secureboostclassifi:19,see:[0,10,20],seed:[4,7,29],select:13,self:[10,13,20],self_evaluation_func:13,self_evaluation_on_the_public_dataset:13,semi:11,send:[20,29],send_gradi:[12,14],sent:20,server:[0,1,9,17,20],server_id:[10,11,12,13,15],server_model:[10,15],server_optim:[11,13,15],server_training_epoch:15,set:[10,15,20],set_pk:22,set_sk:22,set_to_non:20,sever:[10,20],sgd:[0,1,9,12],sgdfloptim:17,sgm:24,shadow:[0,7],shadow_data:7,shadow_data_s:7,shadow_dataset_s:7,shadow_dataset_suz:7,shadow_label:7,shadow_model:7,shadow_result:7,shadow_transfomrm:7,shadow_transform:7,shadowmodel:7,shape:[3,4],share:[0,9],should:[7,10,15,20,21,25,29],show_img_func:4,side:[0,4,13,20],sigma:[0,22,25],sigma_invers:22,sigma_p:25,sigma_q:25,sigma_r_discret:22,sigsac:0,siji:13,silent:[10,15,20,21,25],similar:[4,10,20],simpl:22,simultan:4,sinc:[10,15,20,21,25],singl:[0,9],size:[4,7,8,15,22],sk:22,sklean:8,sklearn:[3,8],small:17,so:8,soft:29,sohei:11,somesh:0,song:0,soteria:[0,1,21],soteria_cli:[1,21],soteriafedavgcli:0,soteriamanag:[0,27],sourc:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,24,25,27,28,29],specifi:[4,11],split:30,splitnn:[0,1,9],splitnnclient:[0,20],springer:0,stabl:24,standard:22,start:30,state:4,statist:0,std:[22,29],step:[0,4,8,17,20,24],step_siz:3,stop:4,store:29,str:[3,10,11,13],student_lr:14,student_model:14,subclass:[10,15,20,21,25,29],submodul:[1,18,23,30,31],subpackag:[3,6,7,8,30,31],subpackg:10,subsample_col:19,sun:0,supervis:11,support:[3,11,30],surrog:3,svm:3,system:0,t:[0,3,4,8,29],take:[4,10,15,20,21,25],taregt:4,target:[0,3,4,7,21,22],target_client_id:4,target_client_index:6,target_dataload:0,target_delta:24,target_epsilon:24,target_label:[0,4],target_layer_nam:[0,27],target_model:[0,2,3,4,7,8],target_torch_net:0,task_lossfn:14,tau:24,teacher_lr:14,teacher_model:14,temperatur:11,tensor:[7,10,11,13,17,20,29],tensordataset:0,tensr:13,ternari:24,test:0,test_batch_s:29,testload:7,tf:29,thei:[10,20,29],them:[4,10,15,20,21,25],thi:[0,10,11,13,15,20,21,22,25,29],thoma:0,though:29,thr:[10,11,12,13,15],through:0,tianhao:0,time:0,torch:[0,4,7,10,11,13,17,20,21,25,29],torch_round_x_decim:[11,13,15,29],total:4,total_vari:[5,29],totensor:29,tqdm:0,trade:3,train:[0,4,6,7,8,9,10,11,12,13,14,15,20,21,25],train_attack:7,train_client:10,train_client_on_public_dataset:13,train_load:0,train_serv:15,train_server_on_public_dataset:13,train_shadow:7,trainload:[0,7],trainset:0,transfer_epoch_priv:15,transfer_epoch_publ:15,transform:[7,29],transform_list_to_tensor:9,tree:30,tri:4,truth:29,try_gpu:29,tupl:[4,22,29],tv_reg_coef:[0,4],two:[0,21],type:[3,4,7,8,10,11,13,15,20,21,22,29],uncom:0,under:[0,8,20],up:11,updat:[10,11,12,13,15,17],updata_from_gradi:12,update_accum_grad:0,update_from_paramet:12,update_globalmodel:11,upload:[10,11,12,13,15,20],upload_gradi:12,upload_paramet:12,us:[3,22,29],usag:30,use_gradi:12,user_id:[0,10,11,12,13,14,15,20],util:[1,2,4,10,11,13,21,23,30,31],valid:[8,10,11,13],validation_dataload:[10,11,13,15],valu:[7,10,17,21,29],valueerror:[3,4],varianc:4,vector:[0,22],via:[0,13,15],vib:[0,25],victim:[0,4,7],vision:0,vjp:29,w:[4,15,29],wang:0,want:[3,7],wei:0,weight:[0,12,17,21],weight_decai:17,welcome2aijack:0,wenqi:0,were:29,when:11,where:[3,4,9],whether:[0,7,10,20,29],which:[3,4,6,7,8,13,20],whose:4,wip:0,wise:22,within:[4,10,15,20,21,25],without:[0,9],worker:4,worker_id:29,worker_init_fn:29,wrapper:[9,18],written:4,x0:3,x:[4,5,7,10,13,14,15,20,21,22,25,29],x_batch:0,x_lot:0,x_minus_1:[0,3],x_po:4,x_shape:4,x_train:[3,8],x_train_:0,x_valid:[0,8],xc:[0,8],xc_attack:0,xm:3,xpo:29,y:[7,13,14,25,29],y_batch:0,y_label:7,y_lot:0,y_po:4,y_pred:[0,13],y_pred_logit:29,y_pred_prob:7,y_shape:4,y_train:[3,8],y_train_:0,y_true_label:29,y_true_labels2:29,y_valid:[0,8],yc:8,yin:0,you:[3,29],ypo:29,yuheng:0,z:22,z_modulu:22,zap:0,zero:[7,17,20],zero_grad:[0,20],zero_grad_keep_accum_grad:0,zhang:0,zhao:0,zhijian:0,zhu:0,zip:0},titles:["Quick Start","aijack package","aijack.attack package","aijack.attack.evasion package","aijack.attack.inversion package","aijack.attack.inversion.utils package","aijack.attack.labelleakage package","aijack.attack.membership package","aijack.attack.poison package","aijack.collaborative package","aijack.collaborative.core package","aijack.collaborative.dsfl package","aijack.collaborative.fedavg package","aijack.collaborative.fedgems package","aijack.collaborative.fedkd package","aijack.collaborative.fedmd package","aijack.collaborative.fedprox package","aijack.collaborative.optimizer package","aijack.collaborative.secureboost package","aijack.collaborative.secureboost.wrapper package","aijack.collaborative.splitnn package","aijack.defense package","aijack.defense.ckks package","aijack.defense.dp package","aijack.defense.dp.manager package","aijack.defense.mid package","aijack.defense.setoria package","aijack.defense.soteria package","aijack.manager package","aijack.utils package","Welcome to AIJack\u2019s documentation!","aijack"],titleterms:{"1":0,"2":0,"3":0,"4":0,"5":0,account:24,adam:17,against:0,aijack:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],algorithm:0,api:[10,11,12,13,15,16],attack:[0,2,3,4,5,6,7,8],base:[17,28],base_attack:2,ciphertext:22,ckk:22,classifi:19,client:[10,11,12,13,14,15,20],collabor:[0,9,10,11,12,13,14,15,16,17,18,19,20],contact:0,content:[26,30],core:10,dataload:[24,29],datarepextractor:5,defenc:0,defens:[0,21,22,23,24,25,26,27],differenti:0,distanc:5,document:30,dp:[23,24],dsfl:11,encod:22,encrypt:[0,22],evas:[0,3],evasion_attack:3,exampl:0,fedavg:12,feder:0,fedgem:13,fedkd:14,fedmd:15,fedprox:16,flow:20,gan_attack:4,generator_attack:4,gradientinvers:4,homomorph:0,indic:30,infer:0,instal:0,invers:[0,4,5],label:0,labelleakag:6,leakag:0,learn:0,loss:25,manag:[24,28],membership:[0,7],membership_infer:7,metric:29,mi_fac:4,mid:25,model:0,modul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,24,25,26,27,28,29],nfdp:15,nn:[0,25],node:19,normattack:6,optim:[17,24],other:0,packag:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],plaintext:22,poison:[0,8],poison_attack:8,privaci:0,privacy_manag:24,purifi:21,quick:0,random:22,rdp:24,regular:5,resourc:0,s:30,secureboost:[18,19],server:[10,11,12,13,15],setoria:26,setoria_cli:26,sgd:17,soteria:27,soteria_cli:27,split:0,splitnn:20,start:0,submodul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,24,25,26,27,28,29],subpackag:[1,2,4,9,18,21,23],support:0,tabl:30,tree:0,usag:0,util:[5,9,22,24,29],welcom:30,wrapper:19}})
